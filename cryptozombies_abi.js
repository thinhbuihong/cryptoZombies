cryptoZombiesABI = {
  contractName: "CryptoZombies",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "_owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "_approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "zombieId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "dna",
          type: "uint256",
        },
      ],
      name: "NewZombie",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "_from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "_to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_approved",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_zombieId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_targetId",
          type: "uint256",
        },
      ],
      name: "attack",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_zombieId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_newDna",
          type: "uint256",
        },
      ],
      name: "changeDna",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_zombieId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_newName",
          type: "string",
        },
      ],
      name: "changeName",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
      ],
      name: "createRandomZombie",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_zombieId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_kittyId",
          type: "uint256",
        },
      ],
      name: "feedOnKitty",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
      ],
      name: "getZombiesByOwner",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_zombieId",
          type: "uint256",
        },
      ],
      name: "levelUp",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_address",
          type: "address",
        },
      ],
      name: "setKittyContractAddress",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_fee",
          type: "uint256",
        },
      ],
      name: "setLevelUpFee",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_from",
          type: "address",
        },
        {
          internalType: "address",
          name: "_to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "withdraw",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "zombieToOwner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "zombies",
      outputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "dna",
          type: "uint256",
        },
        {
          internalType: "uint32",
          name: "level",
          type: "uint32",
        },
        {
          internalType: "uint32",
          name: "readyTime",
          type: "uint32",
        },
        {
          internalType: "uint16",
          name: "winCount",
          type: "uint16",
        },
        {
          internalType: "uint16",
          name: "lossCount",
          type: "uint16",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.5.16+commit.9c3226ce"},"language":"Solidity","output":{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"zombieId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"dna","type":"uint256"}],"name":"NewZombie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_approved","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_zombieId","type":"uint256"},{"internalType":"uint256","name":"_targetId","type":"uint256"}],"name":"attack","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_zombieId","type":"uint256"},{"internalType":"uint256","name":"_newDna","type":"uint256"}],"name":"changeDna","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_zombieId","type":"uint256"},{"internalType":"string","name":"_newName","type":"string"}],"name":"changeName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"createRandomZombie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_zombieId","type":"uint256"},{"internalType":"uint256","name":"_kittyId","type":"uint256"}],"name":"feedOnKitty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getZombiesByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_zombieId","type":"uint256"}],"name":"levelUp","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setKittyContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setLevelUpFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"zombieToOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"zombies","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"dna","type":"uint256"},{"internalType":"uint32","name":"level","type":"uint32"},{"internalType":"uint32","name":"readyTime","type":"uint32"},{"internalType":"uint16","name":"winCount","type":"uint16"},{"internalType":"uint16","name":"lossCount","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"}],"devdoc":{"methods":{"isOwner()":{"return":"true if `msg.sender` is the owner of the contract."},"owner()":{"return":"the address of the owner."},"renounceOwnership()":{"details":"Allows the current owner to relinquish control of the contract."},"transferOwnership(address)":{"details":"Allows the current owner to transfer control of the contract to a newOwner.","params":{"newOwner":"The address to transfer ownership to."}}}},"userdoc":{"methods":{"renounceOwnership()":{"notice":"Renouncing to ownership will leave the contract without an owner. It will not be possible to call the functions with the `onlyOwner` modifier anymore."}}}},"settings":{"compilationTarget":{"project:/contracts/CryptoZombies.sol":"CryptoZombies"},"evmVersion":"istanbul","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/CryptoZombies.sol":{"keccak256":"0x9cfd2068652d4c730957277fdd35440d272cb6ada2782dddab364bf60038ee40","urls":["bzz-raw://973aee72bac44d2f8f6b0c0b45f55d5d45dd8489d22f967e6b559b4496417805","dweb:/ipfs/Qmcvz4qQvJvEjHnLdrkraKe8iwLBA2b3BxEMEagRS4QCpK"]},"project:/contracts/erc721.sol":{"keccak256":"0x2d14b400be41f8254cb4f1ee1173f03d6ce64d35965767cdb923fe0baaf5e262","urls":["bzz-raw://78b1b6a7a631ca653f52627eb3f318a5a3850b290202f414c209ceb878fdf6a4","dweb:/ipfs/QmenyLgeuPWf5QUttUhjFXD4zXdJyfuRdqs4y2BeR92gZn"]},"project:/contracts/ownable.sol":{"keccak256":"0xb8b595853623fd98785ceaeea8f694aad11cffaa96548fa88f4a646e38db7a01","urls":["bzz-raw://7c153c3dac2680fde2600046422ad172cde7fd5e849c8edc6560c8b4ab17e98a","dweb:/ipfs/Qmf1iYk2eTezy3NSMEAqgppuezdAsrdngTm5dkQ5gXVUfT"]},"project:/contracts/safemath.sol":{"keccak256":"0x9633478b4a224dd09b109b7d2dc26b2eed67187098b84015502d3b42ef67c469","urls":["bzz-raw://f12a6441ea50c56b8bb9a174fa26e92e3da17de1e2686f298676e620d4255866","dweb:/ipfs/QmTKYMNsR4vka5wxquqPnmXYDuhX2g2qEjNtE2PdbkyvGp"]},"project:/contracts/zombieattack.sol":{"keccak256":"0x4dee06080b8007a171e50815630e65827cbc25a4346f488a3923b9998228ce13","urls":["bzz-raw://041b9f443bb71198f98cd307ecac6955d9e30637de50ade6cd128b5bd368509a","dweb:/ipfs/QmUVsbzvPyxRowL9n2kfCufSFueWob3P7WjRdeozAuhd8p"]},"project:/contracts/zombiefactory.sol":{"keccak256":"0x7b7207d7fc114f80cccf5707b7a63d364d4caddfe8b91afcd0012cf032c40162","urls":["bzz-raw://cec285f7545388b41e072cf774579e35fdcdf2018c8f81a32f2ba7ee200d8351","dweb:/ipfs/QmdsZzKRgD4QebY2xHdcjTJd481UDhHNdVEcVGAsVUBhTv"]},"project:/contracts/zombiefeeding.sol":{"keccak256":"0xf7223e2d310119dbc7e2359b2608a20f2d487ea8975ca08f739063a41793cfe7","urls":["bzz-raw://e89aefffd3de34d4ed32be0043724a85f306581c49afd77e29d03e9a69fb2796","dweb:/ipfs/QmUKUvpnZDQLoXRjr9iWim6s4X8E8B6zDVqxW3KXTsSJ55"]},"project:/contracts/zombiehelper.sol":{"keccak256":"0x9f8ae176212a8fefa54acef84a523d9f42a3663f0e819518543da812461ee406","urls":["bzz-raw://889f11b93e7a8cc8e5e681cabd3690766da073fca945933ff51bffdf53f3ef61","dweb:/ipfs/QmRHhQGcsu1Bn3XuPaihgP8GGB7ZHKY5dcSmj9vMm5yp1S"]},"project:/contracts/zombieownership.sol":{"keccak256":"0xaa04d8f132181b06846824a64271160945109d5225fa91e6ab0113681e5e7077","urls":["bzz-raw://40e842afd2f40c85822478c873e3318d4b475fe6701325521d49d9ea309141d6","dweb:/ipfs/QmZkQPrZh6XUxB3AnDWcaRFxAZgii89ZpcezBcCp6uQ6id"]}},"version":1}',
  bytecode:
    "0x60806040526010600155600154600a0a6002556201518060035566038d7ea4c6800060085560006009556046600a55336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36121ae806100f96000396000f3fe60806040526004361061011f5760003560e01c80636352211e116100a05780638f32d59b116100645780638f32d59b14610729578063c39cbef114610758578063ccf670f8146107e8578063e1fa763814610823578063f2fde38b146108685761011f565b80636352211e1461051357806370a082311461058e578063715018a6146105f35780637bff0a011461060a5780638da5cb5b146106d25761011f565b80633ccfd60b116100e75780633ccfd60b146103525780634412e1041461035c578063528b7b8f146104025780635f4623f11461047d5780635faf2880146104ce5761011f565b8063095ea7b3146101245780630ce90ec21461017257806317a7f4cc146101a05780632052465e146101e557806323b872dd146102e4575b600080fd5b6101706004803603604081101561013a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108b9565b005b61019e6004803603602081101561018857600080fd5b81019080803590602001909291905050506109d7565b005b3480156101ac57600080fd5b506101e3600480360360408110156101c357600080fd5b810190808035906020019092919080359060200190929190505050610a6c565b005b3480156101f157600080fd5b5061021e6004803603602081101561020857600080fd5b8101908080359060200190929190505050610bf7565b60405180806020018781526020018663ffffffff1663ffffffff1681526020018563ffffffff1663ffffffff1681526020018461ffff1661ffff1681526020018361ffff1661ffff168152602001828103825288818151815260200191508051906020019080838360005b838110156102a4578082015181840152602081019050610289565b50505050905090810190601f1680156102d15780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610350600480360360608110156102fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d14565b005b61035a610df8565b005b34801561036857600080fd5b506103ab6004803603602081101561037f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e4e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103ee5780820151818401526020810190506103d3565b505050509050019250505060405180910390f35b34801561040e57600080fd5b5061043b6004803603602081101561042557600080fd5b8101908080359060200190929190505050610f7b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561048957600080fd5b506104cc600480360360208110156104a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fae565b005b3480156104da57600080fd5b50610511600480360360408110156104f157600080fd5b810190808035906020019092919080359060200190929190505050611003565b005b34801561051f57600080fd5b5061054c6004803603602081101561053657600080fd5b81019080803590602001909291905050506110dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561059a57600080fd5b506105dd600480360360208110156105b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061111a565b6040518082815260200191505060405180910390f35b3480156105ff57600080fd5b50610608611163565b005b34801561061657600080fd5b506106d06004803603602081101561062d57600080fd5b810190808035906020019064010000000081111561064a57600080fd5b82018360208201111561065c57600080fd5b8035906020019184600183028401116401000000008311171561067e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611233565b005b3480156106de57600080fd5b506106e76112a9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561073557600080fd5b5061073e6112d2565b604051808215151515815260200191505060405180910390f35b34801561076457600080fd5b506107e66004803603604081101561077b57600080fd5b8101908080359060200190929190803590602001906401000000008111156107a257600080fd5b8201836020820111156107b457600080fd5b803590602001918460018302840111640100000000831117156107d657600080fd5b9091929391929390505050611329565b005b3480156107f457600080fd5b506108216004803603602081101561080b57600080fd5b810190808035906020019092919050505061140f565b005b34801561082f57600080fd5b506108666004803603604081101561084657600080fd5b81019080803590602001909291908035906020019092919050505061142a565b005b34801561087457600080fd5b506108b76004803603602081101561088b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116b6565b005b806005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461092557600080fd5b82600b600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b60085434146109e557600080fd5b610a2d6001600483815481106109f757fe5b906000526020600020906003020160020160009054906101000a900463ffffffff1663ffffffff166116d390919063ffffffff16565b60048281548110610a3a57fe5b906000526020600020906003020160020160006101000a81548163ffffffff021916908363ffffffff16021790555050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e98b7f4d836040518263ffffffff1660e01b8152600401808281526020019150506101406040518083038186803b158015610ae257600080fd5b505afa158015610af6573d6000803e3d6000fd5b505050506040513d610140811015610b0d57600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919050505090919293949596979850909192939495969750909192939495965090919293949550909192939450909192935090919250909150905080915050610bf283826040518060400160405280600581526020017f6b697474790000000000000000000000000000000000000000000000000000008152506116fb565b505050565b60048181548110610c0457fe5b9060005260206000209060030201600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cb05780601f10610c8557610100808354040283529160200191610cb0565b820191906000526020600020905b815481529060010190602001808311610c9357829003601f168201915b5050505050908060010154908060020160009054906101000a900463ffffffff16908060020160049054906101000a900463ffffffff16908060020160089054906101000a900461ffff169080600201600a9054906101000a900461ffff16905086565b3373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610ddf57503373ffffffffffffffffffffffffffffffffffffffff16600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b610de857600080fd5b610df38383836118dd565b505050565b6000610e026112a9565b90508073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610e4a573d6000803e3d6000fd5b5050565b606080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051908082528060200260200182016040528015610ebf5781602001602082028038833980820191505090505b509050600080905060008090505b600480549050811015610f70578473ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f635780838381518110610f4e57fe5b60200260200101818152505081806001019250505b8080600101915050610ecd565b508192505050919050565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610fb66112d2565b610fbf57600080fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601482816004828154811061101457fe5b906000526020600020906003020160020160009054906101000a900463ffffffff1663ffffffff16101561104757600080fd5b836005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110b357600080fd5b83600486815481106110c157fe5b9060005260206000209060030201600101819055505050505050565b60006005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61116b6112d2565b61117457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461127f57600080fd5b600061128a82611abb565b90506064818161129657fe5b06810390506112a58282611b49565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600283816004828154811061133a57fe5b906000526020600020906003020160020160009054906101000a900463ffffffff1663ffffffff16101561136d57600080fd5b846005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113d957600080fd5b8484600488815481106113e857fe5b90600052602060002090600302016000019190611406929190612054565b50505050505050565b6114176112d2565b61142057600080fd5b8060088190555050565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461149657600080fd5b6000600484815481106114a557fe5b906000526020600020906003020190506000600484815481106114c457fe5b9060005260206000209060030201905060006114e06064611e1b565b9050600a5481116116145761151560018460020160089054906101000a900461ffff1661ffff16611eb490919063ffffffff16565b8360020160086101000a81548161ffff021916908361ffff16021790555061156160018460020160009054906101000a900463ffffffff1663ffffffff166116d390919063ffffffff16565b8360020160006101000a81548163ffffffff021916908363ffffffff1602179055506115ad600183600201600a9054906101000a900461ffff1661ffff16611eb490919063ffffffff16565b82600201600a6101000a81548161ffff021916908361ffff16021790555061160f8683600101546040518060400160405280600681526020017f7a6f6d62696500000000000000000000000000000000000000000000000000008152506116fb565b6116ae565b61163e600184600201600a9054906101000a900461ffff1661ffff16611eb490919063ffffffff16565b83600201600a6101000a81548161ffff021916908361ffff16021790555061168660018360020160089054906101000a900461ffff1661ffff16611eb490919063ffffffff16565b8260020160086101000a81548161ffff021916908361ffff1602179055506116ad83611ed8565b5b505050505050565b6116be6112d2565b6116c757600080fd5b6116d081611f02565b50565b60008082840190508363ffffffff168163ffffffff1610156116f157fe5b8091505092915050565b826005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461176757600080fd5b60006004858154811061177657fe5b9060005260206000209060030201905061178f81611ffa565b61179857600080fd5b60025484816117a357fe5b0693506000600285836001015401816117b857fe5b04905060405160200180807f6b69747479000000000000000000000000000000000000000000000000000000815250600501905060405160208183030381529060405280519060200120846040516020018082805190602001908083835b602083106118395780518252602082019150602081019050602083039250611816565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120141561188d5760636064828161188657fe5b0682030190505b6118cc6040518060400160405280600681526020017f4e6f4e616d65000000000000000000000000000000000000000000000000000081525082611b49565b6118d582611ed8565b505050505050565b6119306001600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461202190919063ffffffff16565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506119c66001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461203d90919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600080826040516020018082805190602001908083835b60208310611af55780518252602082019150602081019050602083039250611ad2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012060001c90506002548181611b4057fe5b06915050919050565b6000600160046040518060c00160405280868152602001858152602001600163ffffffff168152602001600354420163ffffffff168152602001600061ffff168152602001600061ffff16815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000019080519060200190611bde9291906120d4565b506020820151816001015560408201518160020160006101000a81548163ffffffff021916908363ffffffff16021790555060608201518160020160046101000a81548163ffffffff021916908363ffffffff16021790555060808201518160020160086101000a81548161ffff021916908361ffff16021790555060a082015181600201600a6101000a81548161ffff021916908361ffff1602179055505050039050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611d276001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461202190919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f88f026aacbbecc90c18411df4b1185fd8d9be2470f1962f192bf84a27d0704b78184846040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015611dda578082015181840152602081019050611dbf565b50505050905090810190601f168015611e075780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b6000611e33600160095461202190919063ffffffff16565b600981905550814233600954604051602001808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140182815260200193505050506040516020818303038152906040528051906020012060001c81611eac57fe5b069050919050565b60008082840190508361ffff168161ffff161015611ece57fe5b8091505092915050565b60035442018160020160046101000a81548163ffffffff021916908363ffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611f3c57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000428260020160049054906101000a900463ffffffff1663ffffffff1611159050919050565b60008082840190508381101561203357fe5b8091505092915050565b60008282111561204957fe5b818303905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061209557803560ff19168380011785556120c3565b828001600101855582156120c3579182015b828111156120c25782358255916020019190600101906120a7565b5b5090506120d09190612154565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061211557805160ff1916838001178555612143565b82800160010185558215612143579182015b82811115612142578251825591602001919060010190612127565b5b5090506121509190612154565b5090565b61217691905b8082111561217257600081600090555060010161215a565b5090565b9056fea265627a7a723158201e5ee4bc75bff03fa868a134e1fb5f326c9de29e94d317c4cf47d76adb4d235a64736f6c63430005100032",
  deployedBytecode:
    "0x60806040526004361061011f5760003560e01c80636352211e116100a05780638f32d59b116100645780638f32d59b14610729578063c39cbef114610758578063ccf670f8146107e8578063e1fa763814610823578063f2fde38b146108685761011f565b80636352211e1461051357806370a082311461058e578063715018a6146105f35780637bff0a011461060a5780638da5cb5b146106d25761011f565b80633ccfd60b116100e75780633ccfd60b146103525780634412e1041461035c578063528b7b8f146104025780635f4623f11461047d5780635faf2880146104ce5761011f565b8063095ea7b3146101245780630ce90ec21461017257806317a7f4cc146101a05780632052465e146101e557806323b872dd146102e4575b600080fd5b6101706004803603604081101561013a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108b9565b005b61019e6004803603602081101561018857600080fd5b81019080803590602001909291905050506109d7565b005b3480156101ac57600080fd5b506101e3600480360360408110156101c357600080fd5b810190808035906020019092919080359060200190929190505050610a6c565b005b3480156101f157600080fd5b5061021e6004803603602081101561020857600080fd5b8101908080359060200190929190505050610bf7565b60405180806020018781526020018663ffffffff1663ffffffff1681526020018563ffffffff1663ffffffff1681526020018461ffff1661ffff1681526020018361ffff1661ffff168152602001828103825288818151815260200191508051906020019080838360005b838110156102a4578082015181840152602081019050610289565b50505050905090810190601f1680156102d15780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610350600480360360608110156102fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d14565b005b61035a610df8565b005b34801561036857600080fd5b506103ab6004803603602081101561037f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e4e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103ee5780820151818401526020810190506103d3565b505050509050019250505060405180910390f35b34801561040e57600080fd5b5061043b6004803603602081101561042557600080fd5b8101908080359060200190929190505050610f7b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561048957600080fd5b506104cc600480360360208110156104a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fae565b005b3480156104da57600080fd5b50610511600480360360408110156104f157600080fd5b810190808035906020019092919080359060200190929190505050611003565b005b34801561051f57600080fd5b5061054c6004803603602081101561053657600080fd5b81019080803590602001909291905050506110dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561059a57600080fd5b506105dd600480360360208110156105b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061111a565b6040518082815260200191505060405180910390f35b3480156105ff57600080fd5b50610608611163565b005b34801561061657600080fd5b506106d06004803603602081101561062d57600080fd5b810190808035906020019064010000000081111561064a57600080fd5b82018360208201111561065c57600080fd5b8035906020019184600183028401116401000000008311171561067e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611233565b005b3480156106de57600080fd5b506106e76112a9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561073557600080fd5b5061073e6112d2565b604051808215151515815260200191505060405180910390f35b34801561076457600080fd5b506107e66004803603604081101561077b57600080fd5b8101908080359060200190929190803590602001906401000000008111156107a257600080fd5b8201836020820111156107b457600080fd5b803590602001918460018302840111640100000000831117156107d657600080fd5b9091929391929390505050611329565b005b3480156107f457600080fd5b506108216004803603602081101561080b57600080fd5b810190808035906020019092919050505061140f565b005b34801561082f57600080fd5b506108666004803603604081101561084657600080fd5b81019080803590602001909291908035906020019092919050505061142a565b005b34801561087457600080fd5b506108b76004803603602081101561088b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116b6565b005b806005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461092557600080fd5b82600b600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b60085434146109e557600080fd5b610a2d6001600483815481106109f757fe5b906000526020600020906003020160020160009054906101000a900463ffffffff1663ffffffff166116d390919063ffffffff16565b60048281548110610a3a57fe5b906000526020600020906003020160020160006101000a81548163ffffffff021916908363ffffffff16021790555050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e98b7f4d836040518263ffffffff1660e01b8152600401808281526020019150506101406040518083038186803b158015610ae257600080fd5b505afa158015610af6573d6000803e3d6000fd5b505050506040513d610140811015610b0d57600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919050505090919293949596979850909192939495969750909192939495965090919293949550909192939450909192935090919250909150905080915050610bf283826040518060400160405280600581526020017f6b697474790000000000000000000000000000000000000000000000000000008152506116fb565b505050565b60048181548110610c0457fe5b9060005260206000209060030201600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cb05780601f10610c8557610100808354040283529160200191610cb0565b820191906000526020600020905b815481529060010190602001808311610c9357829003601f168201915b5050505050908060010154908060020160009054906101000a900463ffffffff16908060020160049054906101000a900463ffffffff16908060020160089054906101000a900461ffff169080600201600a9054906101000a900461ffff16905086565b3373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610ddf57503373ffffffffffffffffffffffffffffffffffffffff16600b600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b610de857600080fd5b610df38383836118dd565b505050565b6000610e026112a9565b90508073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610e4a573d6000803e3d6000fd5b5050565b606080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051908082528060200260200182016040528015610ebf5781602001602082028038833980820191505090505b509050600080905060008090505b600480549050811015610f70578473ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f635780838381518110610f4e57fe5b60200260200101818152505081806001019250505b8080600101915050610ecd565b508192505050919050565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610fb66112d2565b610fbf57600080fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601482816004828154811061101457fe5b906000526020600020906003020160020160009054906101000a900463ffffffff1663ffffffff16101561104757600080fd5b836005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110b357600080fd5b83600486815481106110c157fe5b9060005260206000209060030201600101819055505050505050565b60006005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61116b6112d2565b61117457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461127f57600080fd5b600061128a82611abb565b90506064818161129657fe5b06810390506112a58282611b49565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600283816004828154811061133a57fe5b906000526020600020906003020160020160009054906101000a900463ffffffff1663ffffffff16101561136d57600080fd5b846005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113d957600080fd5b8484600488815481106113e857fe5b90600052602060002090600302016000019190611406929190612054565b50505050505050565b6114176112d2565b61142057600080fd5b8060088190555050565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461149657600080fd5b6000600484815481106114a557fe5b906000526020600020906003020190506000600484815481106114c457fe5b9060005260206000209060030201905060006114e06064611e1b565b9050600a5481116116145761151560018460020160089054906101000a900461ffff1661ffff16611eb490919063ffffffff16565b8360020160086101000a81548161ffff021916908361ffff16021790555061156160018460020160009054906101000a900463ffffffff1663ffffffff166116d390919063ffffffff16565b8360020160006101000a81548163ffffffff021916908363ffffffff1602179055506115ad600183600201600a9054906101000a900461ffff1661ffff16611eb490919063ffffffff16565b82600201600a6101000a81548161ffff021916908361ffff16021790555061160f8683600101546040518060400160405280600681526020017f7a6f6d62696500000000000000000000000000000000000000000000000000008152506116fb565b6116ae565b61163e600184600201600a9054906101000a900461ffff1661ffff16611eb490919063ffffffff16565b83600201600a6101000a81548161ffff021916908361ffff16021790555061168660018360020160089054906101000a900461ffff1661ffff16611eb490919063ffffffff16565b8260020160086101000a81548161ffff021916908361ffff1602179055506116ad83611ed8565b5b505050505050565b6116be6112d2565b6116c757600080fd5b6116d081611f02565b50565b60008082840190508363ffffffff168163ffffffff1610156116f157fe5b8091505092915050565b826005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461176757600080fd5b60006004858154811061177657fe5b9060005260206000209060030201905061178f81611ffa565b61179857600080fd5b60025484816117a357fe5b0693506000600285836001015401816117b857fe5b04905060405160200180807f6b69747479000000000000000000000000000000000000000000000000000000815250600501905060405160208183030381529060405280519060200120846040516020018082805190602001908083835b602083106118395780518252602082019150602081019050602083039250611816565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120141561188d5760636064828161188657fe5b0682030190505b6118cc6040518060400160405280600681526020017f4e6f4e616d65000000000000000000000000000000000000000000000000000081525082611b49565b6118d582611ed8565b505050505050565b6119306001600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461202190919063ffffffff16565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506119c66001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461203d90919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600080826040516020018082805190602001908083835b60208310611af55780518252602082019150602081019050602083039250611ad2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012060001c90506002548181611b4057fe5b06915050919050565b6000600160046040518060c00160405280868152602001858152602001600163ffffffff168152602001600354420163ffffffff168152602001600061ffff168152602001600061ffff16815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000019080519060200190611bde9291906120d4565b506020820151816001015560408201518160020160006101000a81548163ffffffff021916908363ffffffff16021790555060608201518160020160046101000a81548163ffffffff021916908363ffffffff16021790555060808201518160020160086101000a81548161ffff021916908361ffff16021790555060a082015181600201600a6101000a81548161ffff021916908361ffff1602179055505050039050336005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611d276001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461202190919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f88f026aacbbecc90c18411df4b1185fd8d9be2470f1962f192bf84a27d0704b78184846040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015611dda578082015181840152602081019050611dbf565b50505050905090810190601f168015611e075780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b6000611e33600160095461202190919063ffffffff16565b600981905550814233600954604051602001808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140182815260200193505050506040516020818303038152906040528051906020012060001c81611eac57fe5b069050919050565b60008082840190508361ffff168161ffff161015611ece57fe5b8091505092915050565b60035442018160020160046101000a81548163ffffffff021916908363ffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611f3c57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000428260020160049054906101000a900463ffffffff1663ffffffff1611159050919050565b60008082840190508381101561203357fe5b8091505092915050565b60008282111561204957fe5b818303905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061209557803560ff19168380011785556120c3565b828001600101855582156120c3579182015b828111156120c25782358255916020019190600101906120a7565b5b5090506120d09190612154565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061211557805160ff1916838001178555612143565b82800160010185558215612143579182015b82811115612142578251825591602001919060010190612127565b5b5090506121509190612154565b5090565b61217691905b8082111561217257600081600090555060010161215a565b5090565b9056fea265627a7a723158201e5ee4bc75bff03fa868a134e1fb5f326c9de29e94d317c4cf47d76adb4d235a64736f6c63430005100032",
  sourceMap:
    "70:44:0:-;;;320:2:5;300:22;;354:9;;350:2;:13;329:34;;393:6;370:29;;135:11:7;114:32;;132:1:4;112:21;;175:2;140:37;;573:10:2;564:6;;:19;;;;;;;;;;;;;;;;;;632:6;;;;;;;;;;;599:40;;628:1;599:40;;;;;;;;;;;;70:44:0;;;;;;",
  deployedSourceMap:
    "70:44:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1176:238:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1176:238:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;555:173:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;555:173:7;;;;;;;;;;;;;;;;;:::i;:::-;;1767:230:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1767:230:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1767:230:6;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;585:23:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;585:23:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;585:23:5;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;585:23:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;858:310:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;858:310:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;292:155:7;;;:::i;:::-;;1155:449;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1155:449:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1155:449:7;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1155:449:7;;;;;;;;;;;;;;;;;617:48:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;617:48:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;617:48:5;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;725:129:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;725:129:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;725:129:6;;;;;;;;;;;;;;;;;;;:::i;:::-;;951:196:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;951:196:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;951:196:7;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;385:116:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;385:116:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;385:116:8;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;260:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;260:117:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;260:117:8;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1428:140:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1428:140:2;;;:::i;:::-;;1320:257:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1320:257:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1320:257:5;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1320:257:5;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1320:257:5;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1320:257:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1320:257:5;;;;;;;;;;;;;;;:::i;:::-;;715:79:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;715:79:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1050:92;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1050:92:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;736:207:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;736:207:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;736:207:7;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;736:207:7;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;736:207:7;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;736:207:7;;;;;;;;;;;;:::i;:::-;;455:92;;8:9:-1;5:2;;;30:1;27;20:12;5:2;455:92:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;455:92:7;;;;;;;;;;;;;;;;;:::i;:::-;;422:760:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;422:760:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;422:760:4;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1745:109:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1745:109:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1745:109:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;1176:238:8;1286:8;672:13:6;:24;686:9;672:24;;;;;;;;;;;;;;;;;;;;;658:38;;:10;:38;;;650:47;;;;;;1340:9:8;1312:15;:25;1328:8;1312:25;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;1397:8;1386:9;1365:41;;1374:10;1365:41;;;;;;;;;;;;1176:238;;;:::o;555:173:7:-;640:10;;627:9;:23;619:32;;;;;;689:31;718:1;689:7;697:9;689:18;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:28;;;;:31;;;;:::i;:::-;662:7;670:9;662:18;;;;;;;;;;;;;;;;;;:24;;;:58;;;;;;;;;;;;;;;;;;555:173;:::o;1767:230:6:-;1843:16;1901:13;;;;;;;;;;;:22;;;1924:8;1901:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1901:32:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1901:32:6;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1901:32:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1870:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1944:45;1960:9;1971:8;1944:45;;;;;;;;;;;;;;;;;:15;:45::i;:::-;1767:230;;;:::o;585:23:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;858:310:8:-;1037:10;1010:37;;:13;:23;1024:8;1010:23;;;;;;;;;;;;;;;;;;;;;:37;;;:97;;;;1097:10;1068:39;;:15;:25;1084:8;1068:25;;;;;;;;;;;;;;;;;;;;;:39;;;1010:97;988:130;;;;;;1129:31;1139:5;1146:3;1151:8;1129:9;:31::i;:::-;858:310;;;:::o;292:155:7:-;340:22;381:7;:5;:7::i;:::-;340:50;;401:6;:15;;:38;417:21;401:38;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;401:38:7;292:155;:::o;1155:449::-;1248:16;1282:23;1322:16;:24;1339:6;1322:24;;;;;;;;;;;;;;;;1308:39;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;1308:39:7;;;;1282:65;;1358:15;1376:1;1358:19;;1393:9;1405:1;1393:13;;1388:185;1412:7;:14;;;;1408:1;:18;1388:185;;;1472:6;1452:26;;:13;:16;1466:1;1452:16;;;;;;;;;;;;;;;;;;;;;:26;;;1448:114;;;1517:1;1499:6;1506:7;1499:15;;;;;;;;;;;;;:19;;;;;1537:9;;;;;;;1448:114;1428:3;;;;;;;1388:185;;;;1590:6;1583:13;;;;1155:449;;;:::o;617:48:5:-;;;;;;;;;;;;;;;;;;;;;;:::o;725:129:6:-;927:9:2;:7;:9::i;:::-;919:18;;;;;;837:8:6;806:13;;:40;;;;;;;;;;;;;;;;;;725:129;:::o;951:196:7:-;1044:2;1048:9;257:6;229:7;237:9;229:18;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:34;;;;221:43;;;;;;1080:9;672:13:6;:24;686:9;672:24;;;;;;;;;;;;;;;;;;;;;658:38;;:10;:38;;;650:47;;;;;;1132:7:7;1107;1115:9;1107:18;;;;;;;;;;;;;;;;;;:22;;:32;;;;275:1;951:196;;;;:::o;385:116:8:-;443:7;470:13;:23;484:8;470:23;;;;;;;;;;;;;;;;;;;;;463:30;;385:116;;;:::o;260:117::-;318:7;345:16;:24;362:6;345:24;;;;;;;;;;;;;;;;338:31;;260:117;;;:::o;1428:140:2:-;927:9;:7;:9::i;:::-;919:18;;;;;;1527:1;1490:40;;1511:6;;;;;;;;;;;1490:40;;;;;;;;;;;;1558:1;1541:6;;:19;;;;;;;;;;;;;;;;;;1428:140::o;1320:257:5:-;1427:1;1395:16;:28;1412:10;1395:28;;;;;;;;;;;;;;;;:33;1387:42;;;;;;1440:15;1458:25;1477:5;1458:18;:25::i;:::-;1440:43;;1525:3;1515:7;:13;;;;;;1504:7;:25;1494:35;;1540:29;1554:5;1561:7;1540:13;:29::i;:::-;1320:257;;:::o;715:79:2:-;753:7;780:6;;;;;;;;;;;773:13;;715:79;:::o;1050:92::-;1090:4;1128:6;;;;;;;;;;;1114:20;;:10;:20;;;1107:27;;1050:92;:::o;736:207:7:-;839:1;842:9;257:6;229:7;237:9;229:18;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:34;;;;221:43;;;;;;874:9;672:13:6;:24;686:9;672:24;;;;;;;;;;;;;;;;;;;;;658:38;;:10;:38;;;650:47;;;;;;927:8:7;;901:7;909:9;901:18;;;;;;;;;;;;;;;;;;:23;;:34;;;;;;;:::i;:::-;;275:1;736:207;;;;;:::o;455:92::-;927:9:2;:7;:9::i;:::-;919:18;;;;;;535:4:7;522:10;:17;;;;455:92;:::o;422:760:4:-;515:9;672:13:6;:24;686:9;672:24;;;;;;;;;;;;;;;;;;;;;658:38;;:10;:38;;;650:47;;;;;;542:23:4;568:7;576:9;568:18;;;;;;;;;;;;;;;;;;542:44;;597:26;626:7;634:9;626:18;;;;;;;;;;;;;;;;;;597:47;;655:12;670;678:3;670:7;:12::i;:::-;655:27;;705:24;;697:4;:32;693:482;;766:24;788:1;766:8;:17;;;;;;;;;;;;:21;;;;:24;;;;:::i;:::-;746:8;:17;;;:44;;;;;;;;;;;;;;;;;;822:21;841:1;822:8;:14;;;;;;;;;;;;:18;;;;:21;;;;:::i;:::-;805:8;:14;;;:38;;;;;;;;;;;;;;;;;;882:28;908:1;882:11;:21;;;;;;;;;;;;:25;;;;:28;;;;:::i;:::-;858:11;:21;;;:52;;;;;;;;;;;;;;;;;;925:53;941:9;952:11;:15;;;925:53;;;;;;;;;;;;;;;;;:15;:53::i;:::-;693:482;;;1032:25;1055:1;1032:8;:18;;;;;;;;;;;;:22;;;;:25;;;;:::i;:::-;1011:8;:18;;;:46;;;;;;;;;;;;;;;;;;1095:27;1120:1;1095:11;:20;;;;;;;;;;;;:24;;;;:27;;;;:::i;:::-;1072:11;:20;;;:50;;;;;;;;;;;;;;;;;;1137:26;1154:8;1137:16;:26::i;:::-;693:482;708:1:6;;;422:760:4;;;:::o;1745:109:2:-;927:9;:7;:9::i;:::-;919:18;;;;;;1818:28;1837:8;1818:18;:28::i;:::-;1745:109;:::o;2041:143:3:-;2097:6;2116:8;2131:1;2127;:5;2116:16;;2155:1;2150:6;;:1;:6;;;;2143:14;;;;2175:1;2168:8;;;2041:143;;;;:::o;1125:634:6:-;1268:9;672:13;:24;686:9;672:24;;;;;;;;;;;;;;;;;;;;;658:38;;:10;:38;;;650:47;;;;;;1290:23;1316:7;1324:9;1316:18;;;;;;;;;;;;;;;;;;1290:44;;1353:18;1362:8;1353;:18::i;:::-;1345:27;;;;;;1409:10;;1396;:23;;;;;;1383:36;;1430:14;1477:1;1463:10;1448:8;:12;;;:25;1447:31;;;;;;1430:48;;1571:25;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1571:25:6;;;1561:36;;;;;;1534:8;1517:26;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1517:26:6;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1517:26:6;;;1507:37;;;;;;:90;1489:184;;;1659:2;1652:3;1643:6;:12;;;;;;1633:6;:23;:28;1624:37;;1489:184;1683:31;;;;;;;;;;;;;;;;;;1707:6;1683:13;:31::i;:::-;1725:26;1742:8;1725:16;:26::i;:::-;708:1;;1125:634;;;;:::o;509:341:8:-;651:28;677:1;651:16;:21;668:3;651:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;627:16;:21;644:3;627:21;;;;;;;;;;;;;;;:52;;;;721:35;754:1;721:16;:28;738:10;721:28;;;;;;;;;;;;;;;;:32;;:35;;;;:::i;:::-;690:16;:28;707:10;690:28;;;;;;;;;;;;;;;:66;;;;793:3;767:13;:23;781:8;767:23;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;833:8;828:3;812:30;;821:5;812:30;;;;;;;;;;;;509:341;;;:::o;1090:222:5:-;1187:7;1212:12;1262:4;1245:22;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1245:22:5;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1245:22:5;;;1235:33;;;;;;1227:42;;1212:57;;1294:10;;1287:4;:17;;;;;;1280:24;;;1090:222;;;:::o;725:357::-;803:10;913:1;816:7;843:56;;;;;;;;850:5;843:56;;;;857:4;843:56;;;;863:1;843:56;;;;;;879:12;;873:3;:18;843:56;;;;;;894:1;843:56;;;;;;897:1;843:56;;;;;816:94;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;816:94:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:98;803:111;;945:10;925:13;:17;939:2;925:17;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;997:35;1030:1;997:16;:28;1014:10;997:28;;;;;;;;;;;;;;;;:32;;:35;;;;:::i;:::-;966:16;:28;983:10;966:28;;;;;;;;;;;;;;;:66;;;;1048:26;1058:2;1062:5;1069:4;1048:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1048:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;725:357;;;:::o;186:228:4:-;239:7;271:16;285:1;271:9;;:13;;:16;;;;:::i;:::-;259:9;:28;;;;398:8;353:3;358:10;370:9;;336:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;336:44:4;;;326:55;;;;;;318:64;;:88;;;;;;298:108;;186:228;;;:::o;2930:143:3:-;2986:6;3005:8;3020:1;3016;:5;3005:16;;3044:1;3039:6;;:1;:6;;;;3032:14;;;;3064:1;3057:8;;;2930:143;;;;:::o;862:124:6:-;965:12;;959:3;:18;932:7;:17;;;:46;;;;;;;;;;;;;;;;;;862:124;:::o;2004:187:2:-;2098:1;2078:22;;:8;:22;;;;2070:31;;;;;;2146:8;2117:38;;2138:6;;;;;;;;;;;2117:38;;;;;;;;;;;;2175:8;2166:6;;:17;;;;;;;;;;;;;;;;;;2004:187;:::o;994:123:6:-;1059:4;1105:3;1084:7;:17;;;;;;;;;;;;:24;;;;1076:33;;994:123;;;:::o;1148:147:3:-;1206:7;1226:9;1242:1;1238;:5;1226:17;;1266:1;1261;:6;;1254:14;;;;1286:1;1279:8;;;1148:147;;;;:::o;948:123::-;1006:7;1038:1;1033;:6;;1026:14;;;;1062:1;1058;:5;1051:12;;948:123;;;;:::o;70:44:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  source:
    'pragma solidity >=0.5.0 <0.6.0;\r\n\r\nimport "./zombieownership.sol";\r\n\r\ncontract CryptoZombies is ZombieOwnership {}\r\n',
  sourcePath:
    "C:\\Users\\thinh\\Documents\\cryptoZombies\\contracts\\CryptoZombies.sol",
  ast: {
    absolutePath: "project:/contracts/CryptoZombies.sol",
    exportedSymbols: {
      CryptoZombies: [5],
    },
    id: 6,
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1,
        literals: ["solidity", ">=", "0.5", ".0", "<", "0.6", ".0"],
        nodeType: "PragmaDirective",
        src: "0:31:0",
      },
      {
        absolutePath: "project:/contracts/zombieownership.sol",
        file: "./zombieownership.sol",
        id: 2,
        nodeType: "ImportDirective",
        scope: 6,
        sourceUnit: 1285,
        src: "35:31:0",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        baseContracts: [
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 3,
              name: "ZombieOwnership",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 1284,
              src: "96:15:0",
              typeDescriptions: {
                typeIdentifier: "t_contract$_ZombieOwnership_$1284",
                typeString: "contract ZombieOwnership",
              },
            },
            id: 4,
            nodeType: "InheritanceSpecifier",
            src: "96:15:0",
          },
        ],
        contractDependencies: [54, 163, 590, 761, 955, 1141, 1284],
        contractKind: "contract",
        documentation: null,
        fullyImplemented: true,
        id: 5,
        linearizedBaseContracts: [5, 1284, 54, 590, 1141, 955, 761, 163],
        name: "CryptoZombies",
        nodeType: "ContractDefinition",
        nodes: [],
        scope: 6,
        src: "70:44:0",
      },
    ],
    src: "0:116:0",
  },
  legacyAST: {
    attributes: {
      absolutePath: "project:/contracts/CryptoZombies.sol",
      exportedSymbols: {
        CryptoZombies: [5],
      },
    },
    children: [
      {
        attributes: {
          literals: ["solidity", ">=", "0.5", ".0", "<", "0.6", ".0"],
        },
        id: 1,
        name: "PragmaDirective",
        src: "0:31:0",
      },
      {
        attributes: {
          SourceUnit: 1285,
          absolutePath: "project:/contracts/zombieownership.sol",
          file: "./zombieownership.sol",
          scope: 6,
          symbolAliases: [null],
          unitAlias: "",
        },
        id: 2,
        name: "ImportDirective",
        src: "35:31:0",
      },
      {
        attributes: {
          contractDependencies: [54, 163, 590, 761, 955, 1141, 1284],
          contractKind: "contract",
          documentation: null,
          fullyImplemented: true,
          linearizedBaseContracts: [5, 1284, 54, 590, 1141, 955, 761, 163],
          name: "CryptoZombies",
          nodes: [null],
          scope: 6,
        },
        children: [
          {
            attributes: {
              arguments: null,
            },
            children: [
              {
                attributes: {
                  contractScope: null,
                  name: "ZombieOwnership",
                  referencedDeclaration: 1284,
                  type: "contract ZombieOwnership",
                },
                id: 3,
                name: "UserDefinedTypeName",
                src: "96:15:0",
              },
            ],
            id: 4,
            name: "InheritanceSpecifier",
            src: "96:15:0",
          },
        ],
        id: 5,
        name: "ContractDefinition",
        src: "70:44:0",
      },
    ],
    id: 6,
    name: "SourceUnit",
    src: "0:116:0",
  },
  compiler: {
    name: "solc",
    version: "0.5.16+commit.9c3226ce.Emscripten.clang",
  },
  networks: {
    4: {
      events: {},
      links: {},
      address: "0x3ce8a4aDf43dC0B0a6D476C5A51d7742172Bf8d7",
      transactionHash:
        "0x06284b946f961eb02e518ce061cc6578cd1ef533d8bde59b49a6c915b709dabb",
    },
  },
  schemaVersion: "3.4.3",
  updatedAt: "2021-09-06T08:47:17.851Z",
  networkType: "ethereum",
  devdoc: {
    methods: {
      "isOwner()": {
        return: "true if `msg.sender` is the owner of the contract.",
      },
      "owner()": {
        return: "the address of the owner.",
      },
      "renounceOwnership()": {
        details:
          "Allows the current owner to relinquish control of the contract.",
      },
      "transferOwnership(address)": {
        details:
          "Allows the current owner to transfer control of the contract to a newOwner.",
        params: {
          newOwner: "The address to transfer ownership to.",
        },
      },
    },
  },
  userdoc: {
    methods: {
      "renounceOwnership()": {
        notice:
          "Renouncing to ownership will leave the contract without an owner. It will not be possible to call the functions with the `onlyOwner` modifier anymore.",
      },
    },
  },
};
