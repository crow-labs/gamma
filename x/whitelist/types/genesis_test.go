package types_test

import (
	"testing"

	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				BuyerIdsList: []types.BuyerIds{
					{
						AccAddr: "0",
					},
					{
						AccAddr: "1",
					},
				},
				BuyersList: []types.Buyers{
					{
						BuyerId: "0",
					},
					{
						BuyerId: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated buyerIds",
			genState: &types.GenesisState{
				BuyerIdsList: []types.BuyerIds{
					{
						AccAddr: "0",
					},
					{
						AccAddr: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated buyers",
			genState: &types.GenesisState{
				BuyersList: []types.Buyers{
					{
						BuyerId: "0",
					},
					{
						BuyerId: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
