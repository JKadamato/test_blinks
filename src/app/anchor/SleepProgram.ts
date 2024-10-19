export type SleepProgram = {
  address: "8AW5tuZCCxG5zm6Tu3C4APokQKFBuYN7qFHrxqVXnRye";
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
          name: "sleeper_account";
          writable: true;
        },
        {
          name: "token_account";
          writable: true;
        },
        {
          name: "token_program";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
        }
      ];
      args: [
        {
          name: "end_time";
          type: "u64";
        }
      ];
    },
    {
      name: "create_new_sleeper";
      discriminator: [110, 95, 189, 253, 110, 157, 34, 13];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "sleeper_account";
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
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
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
      name: "create_new_token_account";
      discriminator: [32, 215, 65, 29, 144, 42, 105, 162];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "token_account";
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
          name: "mint";
        },
        {
          name: "token_program";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
        }
      ];
      args: [];
    },
    {
      name: "initialize_token";
      discriminator: [38, 209, 150, 50, 190, 117, 16, 54];
      accounts: [
        {
          name: "payer";
          writable: true;
          signer: true;
        },
        {
          name: "mint_account";
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
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "token_program";
          address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
        }
      ];
      args: [
        {
          name: "args";
          type: {
            defined: {
              name: "TokenConfig";
            };
          };
        }
      ];
    },
    {
      name: "mint_token_to";
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
          name: "token_program";
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
      name: "start_sleep";
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
      name: "Sleeper";
      discriminator: [247, 88, 201, 252, 126, 118, 129, 157];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "OutTime";
      msg: "Out time";
    }
  ];
  types: [
    {
      name: "Sleeper";
      type: {
        kind: "struct";
        fields: [
          {
            name: "sleeper_key";
            type: "pubkey";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "start_time";
            type: "u64";
          },
          {
            name: "end_time";
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
      name: "TokenConfig";
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
