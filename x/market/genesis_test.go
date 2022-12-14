package market_test

import (
	"testing"

	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/testutil/nullify"
	"github.com/crow-labs/gamma/x/market"
	"github.com/crow-labs/gamma/x/market/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		OrderList: []types.Order{
			{
				OrderId: "0",
				BuyerId: "0",
			},
			{
				OrderId: "1",
				BuyerId: "1",
			},
		},
		ListingList: []types.Listing{
			{
				ProdId:    "0",
				ListingId: "0",
			},
			{
				ProdId:    "1",
				ListingId: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarketKeeper(t)
	market.InitGenesis(ctx, *k, genesisState)
	got := market.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.OrderList, got.OrderList)
	require.ElementsMatch(t, genesisState.ListingList, got.ListingList)
	// this line is used by starport scaffolding # genesis/test/assert
}
