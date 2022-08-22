package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		OrderList:   []Order{},
		ListingList: []Listing{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in order
	orderIndexMap := make(map[string]struct{})

	for _, elem := range gs.OrderList {
		index := string(OrderKey(elem.OrderId, elem.BuyerId))
		if _, ok := orderIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for order")
		}
		orderIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in listing
	listingIndexMap := make(map[string]struct{})

	for _, elem := range gs.ListingList {
		index := string(ListingKey(elem.ProdId, elem.ListingId))
		if _, ok := listingIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for listing")
		}
		listingIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
