// export type Sleep = {
//   address: "13go66PaZfF5vMYAKhvq5tRbcAmcEEiS8eLeqJnwkokF";
//   metadata: {
//     name: "sleep";
//     version: "0.1.0";
//     spec: "0.1.0";
//     description: "Created with Anchor";
//   };
//   instructions: [
//     {
//       name: "claim";
//       discriminator: [62, 198, 214, 193, 213, 159, 108, 210];
//       accounts: [
//         {
//           name: "payer";
//           writable: true;
//           signer: true;
//         },
//         {
//           name: "mint";
//           writable: true;
//         },
//         {
//           name: "sleeperAccount";
//           writable: true;
//         },
//         {
//           name: "tokenAccount";
//           writable: true;
//         },
//         {
//           name: "tokenProgram";
//           address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
//         }
//       ];
//       args: [
//         {
//           name: "endTime";
//           type: "u64";
//         }
//       ];
//     },
//     {
//       name: "createNewSleeper";
//       discriminator: [110, 95, 189, 253, 110, 157, 34, 13];
//       accounts: [
//         {
//           name: "payer";
//           writable: true;
//           signer: true;
//         },
//         {
//           name: "sleeperAccount";
//           writable: true;
//           pda: {
//             seeds: [
//               {
//                 kind: "const";
//                 value: [
//                   115,
//                   108,
//                   101,
//                   101,
//                   112,
//                   101,
//                   114,
//                   95,
//                   97,
//                   99,
//                   99,
//                   111,
//                   117,
//                   110,
//                   116
//                 ];
//               },
//               {
//                 kind: "account";
//                 path: "payer";
//               }
//             ];
//           };
//         },
//         {
//           name: "systemProgram";
//           address: "11111111111111111111111111111111";
//         },
//         {
//           name: "rent";
//           address: "SysvarRent111111111111111111111111111111111";
//         }
//       ];
//       args: [
//         {
//           name: "name";
//           type: "string";
//         }
//       ];
//     },
//     {
//       name: "createNewTokenAccount";
//       discriminator: [32, 215, 65, 29, 144, 42, 105, 162];
//       accounts: [
//         {
//           name: "payer";
//           writable: true;
//           signer: true;
//         },
//         {
//           name: "tokenAccount";
//           writable: true;
//           pda: {
//             seeds: [
//               {
//                 kind: "account";
//                 path: "payer";
//               },
//               {
//                 kind: "const";
//                 value: [
//                   6,
//                   221,
//                   246,
//                   225,
//                   215,
//                   101,
//                   161,
//                   147,
//                   217,
//                   203,
//                   225,
//                   70,
//                   206,
//                   235,
//                   121,
//                   172,
//                   28,
//                   180,
//                   133,
//                   237,
//                   95,
//                   91,
//                   55,
//                   145,
//                   58,
//                   140,
//                   245,
//                   133,
//                   126,
//                   255,
//                   0,
//                   169
//                 ];
//               },
//               {
//                 kind: "account";
//                 path: "mint";
//               }
//             ];
//             program: {
//               kind: "const";
//               value: [
//                 140,
//                 151,
//                 37,
//                 143,
//                 78,
//                 36,
//                 137,
//                 241,
//                 187,
//                 61,
//                 16,
//                 41,
//                 20,
//                 142,
//                 13,
//                 131,
//                 11,
//                 90,
//                 19,
//                 153,
//                 218,
//                 255,
//                 16,
//                 132,
//                 4,
//                 142,
//                 123,
//                 216,
//                 219,
//                 233,
//                 248,
//                 89
//               ];
//             };
//           };
//         },
//         {
//           name: "mint";
//         },
//         {
//           name: "tokenProgram";
//           address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
//         },
//         {
//           name: "systemProgram";
//           address: "11111111111111111111111111111111";
//         },
//         {
//           name: "associatedTokenProgram";
//           address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
//         },
//         {
//           name: "rent";
//           address: "SysvarRent111111111111111111111111111111111";
//         }
//       ];
//       args: [];
//     },
//     {
//       name: "initializeToken";
//       discriminator: [38, 209, 150, 50, 190, 117, 16, 54];
//       accounts: [
//         {
//           name: "payer";
//           writable: true;
//           signer: true;
//         },
//         {
//           name: "mintAccount";
//           writable: true;
//           pda: {
//             seeds: [
//               {
//                 kind: "const";
//                 value: [109, 105, 110, 116, 95, 97, 99, 99, 111, 117, 110, 116];
//               },
//               {
//                 kind: "account";
//                 path: "payer";
//               }
//             ];
//           };
//         },
//         {
//           name: "systemProgram";
//           address: "11111111111111111111111111111111";
//         },
//         {
//           name: "tokenProgram";
//           address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
//         }
//       ];
//       args: [
//         {
//           name: "args";
//           type: {
//             defined: {
//               name: "tokenConfig";
//             };
//           };
//         }
//       ];
//     },
//     {
//       name: "mintTokenTo";
//       discriminator: [105, 222, 27, 81, 229, 72, 190, 194];
//       accounts: [
//         {
//           name: "payer";
//           writable: true;
//           signer: true;
//         },
//         {
//           name: "mint";
//           writable: true;
//         },
//         {
//           name: "receiver";
//           writable: true;
//         },
//         {
//           name: "tokenProgram";
//           address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
//         }
//       ];
//       args: [
//         {
//           name: "amount";
//           type: "u64";
//         }
//       ];
//     },
//     {
//       name: "startSleep";
//       discriminator: [182, 244, 123, 144, 217, 146, 191, 45];
//       accounts: [
//         {
//           name: "payer";
//           writable: true;
//           signer: true;
//         },
//         {
//           name: "sleeper";
//           writable: true;
//         }
//       ];
//       args: [
//         {
//           name: "time";
//           type: "u64";
//         }
//       ];
//     }
//   ];
//   accounts: [
//     {
//       name: "sleeper";
//       discriminator: [247, 88, 201, 252, 126, 118, 129, 157];
//     }
//   ];
//   errors: [
//     {
//       code: 6000;
//       name: "invalidName";
//       msg: "Name too long";
//     }
//   ];
//   types: [
//     {
//       name: "sleeper";
//       type: {
//         kind: "struct";
//         fields: [
//           {
//             name: "sleeperKey";
//             type: "pubkey";
//           },
//           {
//             name: "name";
//             type: "string";
//           },
//           {
//             name: "startTime";
//             type: "u64";
//           },
//           {
//             name: "endTime";
//             type: "u64";
//           },
//           {
//             name: "streak";
//             type: "u16";
//           }
//         ];
//       };
//     },
//     {
//       name: "tokenConfig";
//       type: {
//         kind: "struct";
//         fields: [
//           {
//             name: "name";
//             type: "string";
//           },
//           {
//             name: "symbol";
//             type: "string";
//           },
//           {
//             name: "uri";
//             type: "string";
//           }
//         ];
//       };
//     }
//   ];
// };

export type Sleep = {
  address: "13go66PaZfF5vMYAKhvq5tRbcAmcEEiS8eLeqJnwkokF";
  metadata: {
    name: "sleep";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "claim";
      discriminator: [62, 198, 214, 193, 213, 159, 108, 210];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mint";
          writable: true;
        },
        {
          name: "sleeperAccount";
          writable: true;
        },
        {
          name: "tokenAccount";
          writable: true;
        },
        {
          name: "tokenProgram";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
        }
      ];
      args: [
        {
          name: "endTime";
          type: "u64";
        }
      ];
    },
    {
      name: "createNewSleeper";
      discriminator: [110, 95, 189, 253, 110, 157, 34, 13];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mint";
        },
        {
          name: "sleeperAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [
                  115,
                  108,
                  101,
                  101,
                  112,
                  101,
                  114,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ];
              },
              {
                kind: "account";
                path: "payer";
              }
            ];
          };
        },
        {
          name: "tokenAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "payer";
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ];
              },
              {
                kind: "account";
                path: "mint";
              }
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
        },
        {
          name: "associatedTokenProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "tokenProgram";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        }
      ];
    },
    {
      name: "initializeToken";
      discriminator: [38, 209, 150, 50, 190, 117, 16, 54];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mintAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 105, 110, 116, 95, 97, 99, 99, 111, 117, 110, 116];
              },
              {
                kind: "account";
                path: "payer";
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
        {
          name: "tokenProgram";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
        }
      ];
      args: [
        {
          name: "args";
          type: {
            defined: {
              name: "tokenConfig";
            };
          };
        }
      ];
    },
    {
      name: "mintTokenTo";
      discriminator: [105, 222, 27, 81, 229, 72, 190, 194];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mint";
          writable: true;
        },
        {
          name: "receiver";
          writable: true;
        },
        {
          name: "tokenProgram";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "startSleep";
      discriminator: [182, 244, 123, 144, 217, 146, 191, 45];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "sleeper";
          writable: true;
        }
      ];
      args: [
        {
          name: "time";
          type: "u64";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "sleeper";
      discriminator: [247, 88, 201, 252, 126, 118, 129, 157];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "invalidName";
      msg: "Name too long";
    }
  ];
  types: [
    {
      name: "sleeper";
      type: {
        kind: "struct";
        fields: [
          {
            name: "sleeperKey";
            type: "pubkey";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "startTime";
            type: "u64";
          },
          {
            name: "endTime";
            type: "u64";
          },
          {
            name: "streak";
            type: "u16";
          }
        ];
      };
    },
    {
      name: "tokenConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "symbol";
            type: "string";
          },
          {
            name: "uri";
            type: "string";
          }
        ];
      };
    }
  ];
};
