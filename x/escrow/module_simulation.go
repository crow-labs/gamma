package escrow

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/crow-labs/gamma/testutil/sample"
	escrowsimulation "github.com/crow-labs/gamma/x/escrow/simulation"
	"github.com/crow-labs/gamma/x/escrow/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = escrowsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateCrow = "op_weight_msg_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCrow int = 100

	opWeightMsgUpdateCrow = "op_weight_msg_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCrow int = 100

	opWeightMsgDeleteCrow = "op_weight_msg_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCrow int = 100

	opWeightMsgCreateVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVote int = 100

	opWeightMsgUpdateVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateVote int = 100

	opWeightMsgDeleteVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteVote int = 100

	opWeightMsgCreateDispute = "op_weight_msg_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDispute int = 100

	opWeightMsgUpdateDispute = "op_weight_msg_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDispute int = 100

	opWeightMsgDeleteDispute = "op_weight_msg_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDispute int = 100

	opWeightMsgCreateVerdict = "op_weight_msg_verdict"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVerdict int = 100

	opWeightMsgUpdateVerdict = "op_weight_msg_verdict"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateVerdict int = 100

	opWeightMsgDeleteVerdict = "op_weight_msg_verdict"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteVerdict int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	escrowGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		CrowList: []types.Crow{
			{
				Creator:   sample.AccAddress(),
				ListingId: "0",
				OrderId:   "0",
			},
			{
				Creator:   sample.AccAddress(),
				ListingId: "1",
				OrderId:   "1",
			},
		},
		VoteList: []types.Vote{
			{
				Creator:   sample.AccAddress(),
				VoterId:   "0",
				DisputeId: "0",
			},
			{
				Creator:   sample.AccAddress(),
				VoterId:   "1",
				DisputeId: "1",
			},
		},
		DisputeList: []types.Dispute{
			{
				Creator: sample.AccAddress(),
				CrowId:  "0",
			},
			{
				Creator: sample.AccAddress(),
				CrowId:  "1",
			},
		},
		VerdictList: []types.Verdict{
			{
				Creator:   sample.AccAddress(),
				CrowId:    "0",
				DisputeId: "0",
			},
			{
				Creator:   sample.AccAddress(),
				CrowId:    "1",
				DisputeId: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&escrowGenesis)
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

	var weightMsgCreateCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCrow, &weightMsgCreateCrow, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCrow = defaultWeightMsgCreateCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCrow,
		escrowsimulation.SimulateMsgCreateCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCrow, &weightMsgUpdateCrow, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCrow = defaultWeightMsgUpdateCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCrow,
		escrowsimulation.SimulateMsgUpdateCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCrow, &weightMsgDeleteCrow, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCrow = defaultWeightMsgDeleteCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCrow,
		escrowsimulation.SimulateMsgDeleteCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateVote, &weightMsgCreateVote, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVote = defaultWeightMsgCreateVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVote,
		escrowsimulation.SimulateMsgCreateVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateVote, &weightMsgUpdateVote, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateVote = defaultWeightMsgUpdateVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateVote,
		escrowsimulation.SimulateMsgUpdateVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteVote, &weightMsgDeleteVote, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteVote = defaultWeightMsgDeleteVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteVote,
		escrowsimulation.SimulateMsgDeleteVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDispute, &weightMsgCreateDispute, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDispute = defaultWeightMsgCreateDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDispute,
		escrowsimulation.SimulateMsgCreateDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDispute, &weightMsgUpdateDispute, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDispute = defaultWeightMsgUpdateDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDispute,
		escrowsimulation.SimulateMsgUpdateDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDispute, &weightMsgDeleteDispute, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDispute = defaultWeightMsgDeleteDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDispute,
		escrowsimulation.SimulateMsgDeleteDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateVerdict int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateVerdict, &weightMsgCreateVerdict, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVerdict = defaultWeightMsgCreateVerdict
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVerdict,
		escrowsimulation.SimulateMsgCreateVerdict(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateVerdict int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateVerdict, &weightMsgUpdateVerdict, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateVerdict = defaultWeightMsgUpdateVerdict
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateVerdict,
		escrowsimulation.SimulateMsgUpdateVerdict(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteVerdict int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteVerdict, &weightMsgDeleteVerdict, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteVerdict = defaultWeightMsgDeleteVerdict
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteVerdict,
		escrowsimulation.SimulateMsgDeleteVerdict(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
