package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ListingKeyPrefix is the prefix to retrieve all Listing
	ListingKeyPrefix = "Listing/value/"
)

// ListingKey returns the store key to retrieve a Listing from the index fields
func ListingKey(
	prodId string,
	listingId string,
) []byte {
	var key []byte

	prodIdBytes := []byte(prodId)
	key = append(key, prodIdBytes...)
	key = append(key, []byte("/")...)

	listingIdBytes := []byte(listingId)
	key = append(key, listingIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
