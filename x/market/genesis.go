package market

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/gamma/x/market/keeper"
	"github.com/crow-labs/gamma/x/market/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the order
	for _, elem := range genState.OrderList {
		k.SetOrder(ctx, elem)
	}
	// Set all the listing
	for _, elem := range genState.ListingList {
		k.SetListing(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.OrderList = k.GetAllOrder(ctx)
	genesis.ListingList = k.GetAllListing(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
