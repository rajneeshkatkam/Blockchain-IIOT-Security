pragma solidity ^0.4.24;

contract PmuVoting
{   
    struct pmu
    {
        uint key;   //key is assigned to each of the pmu
        address addr;
        int faultval; uint opinion; int voltage; int current; int frequency;
    }
    
    uint no_of_pmu = 0;
    bool public trigger=false;
    bool public getcall=false;
    pmu[] pmu_network;
    uint public whocalledset=0;
    uint public  whogotcall=0;
    mapping(address=>uint)  pmumap;  //map from addr to key
    bool[] hassetdata;
    bool[] hasgotcall;
    uint public finalCall = 0;

    bool res;

    event getValue(string s,uint i,uint k);
    
    function registerPmu() public
    {
        require(no_of_pmu <= 8); 
        
        pmu_network.push(pmu(0,0,0,0,0,0,0));   //dummy values
        
        pmu_network[no_of_pmu].addr = msg.sender;     //actual value
        pmu_network[no_of_pmu].opinion = 0; //opinion=0 =>no opinion; opinion=1 =>dont trip; opinion=-1 =>trip;
        address addr=msg.sender;
        pmumap[addr] = no_of_pmu;
        hassetdata.push(false);
        hasgotcall.push(false);
        emit getValue("register",no_of_pmu,23);
        no_of_pmu++;
    }
 
    function setData(uint o, int _voltage,int _current,int _frequency) public
    {
        uint k = pmumap[msg.sender];
        require(trigger==true && hassetdata[k]==false);
        hassetdata[k]=true;
        pmu_network[k].opinion = o;
        pmu_network[k].voltage = _voltage;
        pmu_network[k].current = _current;
        pmu_network[k].frequency = _frequency;
        whocalledset++;
        emit getValue("whocalled",whocalledset,no_of_pmu);
        if(whocalledset==no_of_pmu)
        {
            trigger=false;
            whocalledset=0;
            finalCall = 0;
            uint i; uint ctr=0;
                for(i = 0; i < no_of_pmu; i++)
                {
                    finalCall += pmu_network[i].opinion;
                    hassetdata[i]=false;
                    emit getValue("setData",i,finalCall);
                }
            getcall=true;
            emit getValue("final result",i,finalCall);
 
        }
        
    }
 
    function getFinalCall() public returns(bool)
    {
    uint a=pmumap[msg.sender];
    require(getcall==true && finalCall!=0);
    bool res;
        if(finalCall>0)
        {
            res=true;
        }
        else 
        {
            res= false;
        }

    finalCall=0;
    return res;
 
    }


    function getValueCall()public constant returns(uint)
    {
        return finalCall;
    }

 
    function setFault() public //constant returns(bool)
    {
     
        trigger=true;
    }
    
}


