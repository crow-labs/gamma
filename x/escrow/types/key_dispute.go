package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// DisputeKeyPrefix is the prefix to retrieve all Dispute
	DisputeKeyPrefix = "Dispute/value/"
)

// DisputeKey returns the store key to retrieve a Dispute from the index fields
func DisputeKey(
	crowId string,
) []byte {
	var key []byte

	crowIdBytes := []byte(crowId)
	key = append(key, crowIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
