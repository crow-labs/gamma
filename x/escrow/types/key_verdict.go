package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// VerdictKeyPrefix is the prefix to retrieve all Verdict
	VerdictKeyPrefix = "Verdict/value/"
)

// VerdictKey returns the store key to retrieve a Verdict from the index fields
func VerdictKey(
	crowId string,
	disputeId string,
) []byte {
	var key []byte

	crowIdBytes := []byte(crowId)
	key = append(key, crowIdBytes...)
	key = append(key, []byte("/")...)

	disputeIdBytes := []byte(disputeId)
	key = append(key, disputeIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
