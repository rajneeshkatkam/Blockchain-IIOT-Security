var account1;
var account2;
var account3;
var contractObj;
App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {

    var Web3=require('web3');
    console.log("statement "+require('web3'));
    var web3=new Web3(new Web3.providers.HttpProvider('http://localhost:8543'));

    //if(web3==null)
      //console.log("null object "+web3);
    //console.log("version "+web3.version.api);
 
    // var accounts2= web3.eth.getAccounts(function(error, accounts) {
    //   if(!error){
    //     console.log("accounts in getAccounts "+accounts);
    //     account1=accounts[0];

    //     console.log("account1 "+account1);
    //     console.log("accounts2"+accounts2);
    //   }
    //   else
    //     console.log("error");
    // });
    var accounts=web3.eth.accounts;
    account1=accounts[0];
    account2=accounts[1];
    account3=accounts[2];
    console.log("accountshjbb2 "+accounts);

    web3.eth.defaultAccount = account1;
 
    //var accounts= web3.eth.getAccounts();
    console.log("after accounts "+account1);

    ////var contractObj;
 
    // $.getJSON('PmuVoting.json', function(data) {
    //   // Get the necessary contract artifact file and instantiate it with truffle-contract
    //   var pmuArtifact = data.abi;
    //   console.log("first");
    //   var Contract = web3.eth.contract(pmuArtifact);
    //   console.log("second");
    //   App.contracts.pmu = Contract.at("0xdf535f8cf6398be597cba100811c5661cf5c4770");
    //   console.log("third")
    //                                                         console.log("app.contracts.pmu "+Contract);
    //   console.log("fourth")
    //   contractObj=App.contracts.pmu;
    //   console.log("inside "+contractObj);
 
    //   });



    //while(typeof contractObj=='undefined')
    //{
    //  console.log(contractObj.registerPmu());
    //  ninja();
    //}
    console.log("Before getABI "+contractObj);

    (async () => {
      //await getABI();

      await $.getJSON('PmuVoting.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var pmuArtifact = data.abi;
      console.log("first");
      var Contract = web3.eth.contract(pmuArtifact);
      console.log("second");
      //App.contracts.pmu = Contract.at("0xdf535f8cf6398be597cba100811c5661cf5c4770");
      contractObj = Contract.at("0x92f8ebc6397f11b38bdd7f80ae1db295c022e123");
      console.log("third")
      console.log("contract "+Contract);
      console.log("fourth")
      //contractObj=App.contracts.pmu;
      console.log("inside get JSON "+contractObj);
      });

      console.log("inside async block "+contractObj);
      //await App.contracts.pmu=contractObj;
      // await console.log(contractObj.registerPmu.sendTransaction({from:account1, gas:3000000},function(err, transactionHash) {
      //           if (!err)
      //               console.log(transactionHash);
      // }));
  
      console.log(account1);
      console.log(web3.version.api);

   
      var pmuevent = contractObj.getValue();

      pmuevent.watch(function(error, result){
          if (!error)
                console.log(result.args);
            else
                console.log("error "+error);
      });


      var flag=true;

      setInterval(function()
      {
        console.log("changing "+flag);
        flag=!flag;;
      },30000);

       //console.log("register pmu "+contractObj.registerPmu());
      console.log("register pmu "+contractObj.registerPmu.sendTransaction({from:account1,gas:300000}));
      console.log("register pmu "+contractObj.registerPmu.sendTransaction({from:account2,gas:300000}));
      //console.log("register pmu "+contractObj.registerPmu.sendTransaction({from:account3, gas:3000000}));


    //   setInterval(async function()
    //   {
    //   //   console.log("flag "+flag);

    //      if(flag)
    //    await console.log("set fault "+contractObj.setFault.sendTransaction({from:account1, gas:3000000})); 

    //    await console.log("setData1 "+contractObj.setData.sendTransaction(51,1,1,1,{from:account1, gas:3000000}));
    //    await console.log("setData2 "+contractObj.setData.sendTransaction(100,1,1,1,{from:account2, gas:3000000}));
    //   // // console.log("setData3 "+contractObj.setData.sendTransaction(20,1,1,1,{from:account3, gas:3000000}));

    //   //console.log("set"+contractObj.setData.sendTransaction(1,1,1,1,{from:account2, gas:3000000}));
    //   //console.log(contractObj.setData.sendTransaction(1,1,1,1,{from:account2, gas:3000000}));
    //   //console.log(contractObj.setData.sendTransaction(1,1,1,1,{from:account3, gas:3000000}));

    //   await console.log("getValueCall "+contractObj.getValueCall());

    //   await console.log("finalCall "+contractObj.getFinalCall.sendTransaction({from:account1, gas:3000000}));

    // },3000);

        setInterval(function()
        {
        new Promise(function(resolve, reject) {
          if(flag)
         resolve(console.log("set fault "+contractObj.setFault.sendTransaction({from:account1, gas:3000000})));
        else
          reject(console.log("ITS false dont set anything"));
          

        }).then(function(result) { // (**)
            console.log("setData1 "+contractObj.setData.sendTransaction(51,1,1,1,{from:account1, gas:3000000}));
            console.log("setData2 "+contractObj.setData.sendTransaction(100,1,1,1,{from:account2, gas:3000000}));

        }).then(function(result) { // (***)

            console.log("getValueCall "+contractObj.getValueCall());

        }).then(function(result) {

            console.log("finalCall "+contractObj.getFinalCall.sendTransaction({from:account1, gas:3000000}));

        });
      },10000);






































   


      // console.log(contractObj.getFinalCall.call(function (error,result){
      //     if(!error)
      //     console.log(result);
      //     else

      //     console.log("error");


      //     }));
   
      // if(faultispresent())
      // {
      // console.log("there is a fault");
      // await console.log("set fault"+contractObj.setFault.sendTransaction({from:account1, gas:3000000}));
      // }
      // await console.log("set data "+contractObj.setData.sendTransaction(5,1,1,1,{from:account1, gas:3000000}));
      // await console.log("set data "+contractObj.setData.sendTransaction(5,1,1,1,{from:account2, gas:3000000}));
      // await console.log("set data "+contractObj.setData.sendTransaction(1,1,1,1,{from:account3, gas:3000000}));
      // await console.log("fianl call"+contractObj.getFinalCall.sendTransaction({from:account1, gas:3000000}));

  
 
    // var pmuevent=contractObj.getValue();
    // pmuevent.watch(function(error,result){
    // if(!error)
    // console.log(result.args);
    // else

    // console.log("error");
 
    // });


      //await console.log(contractObj.registerPmu());//not working

    })();

    //getABI().then(console.log("After promise "+contractObj));

 
    //App.contracts.pmu=contractObj;

    console.log("after async block "+contractObj);
     // console.log("register pmu "+contractObj.setData.sendTransaction(1,1,1,1,{from:account2, gas:3000000}));
    //  console.log("register pmu "+contractObj.setData.sendTransaction(1,1,1,1,{from:account3, gas:3000000}));
  


    // if (typeof web3 !== 'undefined') {
    //   App.web3Provider = web3.currentProvider;
    //   console.log("undef"+App.web3Provider);
    // } else {
    //   // If no injected web3 instance is detected, fall back to Ganache
    //   App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    //   console.log("http");
    // }
    // web3 = new Web3(App.web3Provider);
    // var accounts= web3.eth.getAccounts(function(error, accounts) {
    //   if(!error){
    //     console.log("accounts in getAccounts "+accounts);
    //     account1=accounts[0];
    //   }
    //   else
    //     console.log("error");
    // });
    // console.log("accounts outside getAccounts "+account1);
  },

 
};

// async function getABI()
// {
//   await $.getJSON('PmuVoting.json', function(data) {
//       // Get the necessary contract artifact file and instantiate it with truffle-contract
//       var pmuArtifact = data.abi;
//       console.log("first");
//       var Contract = web3.eth.contract(pmuArtifact);
//       console.log("second");
//       //App.contracts.pmu = Contract.at("0xdf535f8cf6398be597cba100811c5661cf5c4770");
//       contractObj = Contract.at("0xdf535f8cf6398be597cba100811c5661cf5c4770");
//       console.log("third")
//       console.log("contract "+Contract);
//       console.log("fourth")
//       //contractObj=App.contracts.pmu;
//       console.log("inside get JSON "+contractObj);
//       });

// }

 
function faultispresent(){
    return true;

}

function ninja(){
    setTimeout(function(){
        //if(faultispresent()){
            //console.log(contractObj.setFault());

        //}
  
           console.log(contractObj.setData(1,1,1,1));
           /*for(var i=0;i<20000;i++);*/
           console.log(contractObj.getFinalCall());
           /*for(var i=0;i<20000;i++);*/
           ninja();

    },2000)
             

}


$(function() {
  $(window).on('load', function() {
    App.init();
  
  });
});
  
  
