package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BuyersKeyPrefix is the prefix to retrieve all Buyers
	BuyersKeyPrefix = "Buyers/value/"
)

// BuyersKey returns the store key to retrieve a Buyers from the index fields
func BuyersKey(
	buyerId string,
) []byte {
	var key []byte

	buyerIdBytes := []byte(buyerId)
	key = append(key, buyerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
