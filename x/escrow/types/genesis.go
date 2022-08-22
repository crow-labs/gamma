package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:   PortID,
		CrowList: []Crow{},
		VoteList: []Vote{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated index in crow
	crowIndexMap := make(map[string]struct{})

	for _, elem := range gs.CrowList {
		index := string(CrowKey(elem.ListingId, elem.OrderId))
		if _, ok := crowIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for crow")
		}
		crowIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in vote
	voteIndexMap := make(map[string]struct{})

	for _, elem := range gs.VoteList {
		index := string(VoteKey(elem.VoterId, elem.DisputeId))
		if _, ok := voteIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for vote")
		}
		voteIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
