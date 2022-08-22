package market

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/crow-labs/gamma/testutil/sample"
	marketsimulation "github.com/crow-labs/gamma/x/market/simulation"
	"github.com/crow-labs/gamma/x/market/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = marketsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateOrder = "op_weight_msg_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateOrder int = 100

	opWeightMsgUpdateOrder = "op_weight_msg_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateOrder int = 100

	opWeightMsgDeleteOrder = "op_weight_msg_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteOrder int = 100

	opWeightMsgCreateListing = "op_weight_msg_listing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateListing int = 100

	opWeightMsgUpdateListing = "op_weight_msg_listing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateListing int = 100

	opWeightMsgDeleteListing = "op_weight_msg_listing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteListing int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	marketGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		OrderList: []types.Order{
			{
				Creator: sample.AccAddress(),
				OrderId: "0",
				BuyerId: "0",
			},
			{
				Creator: sample.AccAddress(),
				OrderId: "1",
				BuyerId: "1",
			},
		},
		ListingList: []types.Listing{
			{
				Creator:   sample.AccAddress(),
				ProdId:    "0",
				ListingId: "0",
			},
			{
				Creator:   sample.AccAddress(),
				ProdId:    "1",
				ListingId: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&marketGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateOrder, &weightMsgCreateOrder, nil,
		func(_ *rand.Rand) {
			weightMsgCreateOrder = defaultWeightMsgCreateOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateOrder,
		marketsimulation.SimulateMsgCreateOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateOrder, &weightMsgUpdateOrder, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateOrder = defaultWeightMsgUpdateOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateOrder,
		marketsimulation.SimulateMsgUpdateOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteOrder, &weightMsgDeleteOrder, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteOrder = defaultWeightMsgDeleteOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteOrder,
		marketsimulation.SimulateMsgDeleteOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateListing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateListing, &weightMsgCreateListing, nil,
		func(_ *rand.Rand) {
			weightMsgCreateListing = defaultWeightMsgCreateListing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateListing,
		marketsimulation.SimulateMsgCreateListing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateListing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateListing, &weightMsgUpdateListing, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateListing = defaultWeightMsgUpdateListing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateListing,
		marketsimulation.SimulateMsgUpdateListing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteListing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteListing, &weightMsgDeleteListing, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteListing = defaultWeightMsgDeleteListing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteListing,
		marketsimulation.SimulateMsgDeleteListing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
