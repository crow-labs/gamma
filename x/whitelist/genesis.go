package whitelist

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/gamma/x/whitelist/keeper"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the buyerIds
	for _, elem := range genState.BuyerIdsList {
		k.SetBuyerIds(ctx, elem)
	}
	// Set all the buyers
	for _, elem := range genState.BuyersList {
		k.SetBuyers(ctx, elem)
	}
	// Set all the voter
	for _, elem := range genState.VoterList {
		k.SetVoter(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BuyerIdsList = k.GetAllBuyerIds(ctx)
	genesis.BuyersList = k.GetAllBuyers(ctx)
	genesis.VoterList = k.GetAllVoter(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
