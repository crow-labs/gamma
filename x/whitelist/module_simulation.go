package whitelist

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/crow-labs/gamma/testutil/sample"
	whitelistsimulation "github.com/crow-labs/gamma/x/whitelist/simulation"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = whitelistsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateBuyerIds = "op_weight_msg_buyer_ids"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBuyerIds int = 100

	opWeightMsgUpdateBuyerIds = "op_weight_msg_buyer_ids"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBuyerIds int = 100

	opWeightMsgDeleteBuyerIds = "op_weight_msg_buyer_ids"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBuyerIds int = 100

	opWeightMsgCreateBuyers = "op_weight_msg_buyers"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBuyers int = 100

	opWeightMsgUpdateBuyers = "op_weight_msg_buyers"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBuyers int = 100

	opWeightMsgDeleteBuyers = "op_weight_msg_buyers"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBuyers int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	whitelistGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		BuyerIdsList: []types.BuyerIds{
			{
				Creator: sample.AccAddress(),
				AccAddr: "0",
			},
			{
				Creator: sample.AccAddress(),
				AccAddr: "1",
			},
		},
		BuyersList: []types.Buyers{
			{
				Creator: sample.AccAddress(),
				BuyerId: "0",
			},
			{
				Creator: sample.AccAddress(),
				BuyerId: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&whitelistGenesis)
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

	var weightMsgCreateBuyerIds int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBuyerIds, &weightMsgCreateBuyerIds, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBuyerIds = defaultWeightMsgCreateBuyerIds
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBuyerIds,
		whitelistsimulation.SimulateMsgCreateBuyerIds(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBuyerIds int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBuyerIds, &weightMsgUpdateBuyerIds, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBuyerIds = defaultWeightMsgUpdateBuyerIds
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBuyerIds,
		whitelistsimulation.SimulateMsgUpdateBuyerIds(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBuyerIds int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBuyerIds, &weightMsgDeleteBuyerIds, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBuyerIds = defaultWeightMsgDeleteBuyerIds
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBuyerIds,
		whitelistsimulation.SimulateMsgDeleteBuyerIds(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateBuyers int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBuyers, &weightMsgCreateBuyers, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBuyers = defaultWeightMsgCreateBuyers
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBuyers,
		whitelistsimulation.SimulateMsgCreateBuyers(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBuyers int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBuyers, &weightMsgUpdateBuyers, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBuyers = defaultWeightMsgUpdateBuyers
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBuyers,
		whitelistsimulation.SimulateMsgUpdateBuyers(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBuyers int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBuyers, &weightMsgDeleteBuyers, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBuyers = defaultWeightMsgDeleteBuyers
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBuyers,
		whitelistsimulation.SimulateMsgDeleteBuyers(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
