package types_test

import (
	"testing"

	"github.com/crow-labs/gamma/x/escrow/types"
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
				PortId: types.PortID,
				CrowList: []types.Crow{
					{
						ListingId: "0",
						OrderId:   "0",
					},
					{
						ListingId: "1",
						OrderId:   "1",
					},
				},
				VoteList: []types.Vote{
					{
						VoterId:   "0",
						DisputeId: "0",
					},
					{
						VoterId:   "1",
						DisputeId: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated crow",
			genState: &types.GenesisState{
				CrowList: []types.Crow{
					{
						ListingId: "0",
						OrderId:   "0",
					},
					{
						ListingId: "0",
						OrderId:   "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated vote",
			genState: &types.GenesisState{
				VoteList: []types.Vote{
					{
						VoterId:   "0",
						DisputeId: "0",
					},
					{
						VoterId:   "0",
						DisputeId: "0",
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
