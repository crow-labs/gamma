package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		BuyerIdsList: []BuyerIds{},
		BuyersList:   []Buyers{},
		VoterList:    []Voter{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in buyerIds
	buyerIdsIndexMap := make(map[string]struct{})

	for _, elem := range gs.BuyerIdsList {
		index := string(BuyerIdsKey(elem.AccAddr))
		if _, ok := buyerIdsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for buyerIds")
		}
		buyerIdsIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in buyers
	buyersIndexMap := make(map[string]struct{})

	for _, elem := range gs.BuyersList {
		index := string(BuyersKey(elem.BuyerId))
		if _, ok := buyersIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for buyers")
		}
		buyersIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in voter
	voterIndexMap := make(map[string]struct{})

	for _, elem := range gs.VoterList {
		index := string(VoterKey(elem.AccAddr))
		if _, ok := voterIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for voter")
		}
		voterIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
