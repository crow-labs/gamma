package whitelist_test

import (
	"testing"

	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/testutil/nullify"
	"github.com/crow-labs/gamma/x/whitelist"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WhitelistKeeper(t)
	whitelist.InitGenesis(ctx, *k, genesisState)
	got := whitelist.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BuyerIdsList, got.BuyerIdsList)
	require.ElementsMatch(t, genesisState.BuyersList, got.BuyersList)
	// this line is used by starport scaffolding # genesis/test/assert
}
