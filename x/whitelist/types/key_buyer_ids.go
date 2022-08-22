package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BuyerIdsKeyPrefix is the prefix to retrieve all BuyerIds
	BuyerIdsKeyPrefix = "BuyerIds/value/"
)

// BuyerIdsKey returns the store key to retrieve a BuyerIds from the index fields
func BuyerIdsKey(
	accAddr string,
) []byte {
	var key []byte

	accAddrBytes := []byte(accAddr)
	key = append(key, accAddrBytes...)
	key = append(key, []byte("/")...)

	return key
}
