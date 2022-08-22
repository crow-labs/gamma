package escrow_test

import (
	"testing"

	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/testutil/nullify"
	"github.com/crow-labs/gamma/x/escrow"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.EscrowKeeper(t)
	escrow.InitGenesis(ctx, *k, genesisState)
	got := escrow.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.CrowList, got.CrowList)
	require.ElementsMatch(t, genesisState.VoteList, got.VoteList)
	// this line is used by starport scaffolding # genesis/test/assert
}
