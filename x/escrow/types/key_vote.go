package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// VoteKeyPrefix is the prefix to retrieve all Vote
	VoteKeyPrefix = "Vote/value/"
)

// VoteKey returns the store key to retrieve a Vote from the index fields
func VoteKey(
	voterId string,
	disputeId string,
) []byte {
	var key []byte

	voterIdBytes := []byte(voterId)
	key = append(key, voterIdBytes...)
	key = append(key, []byte("/")...)

	disputeIdBytes := []byte(disputeId)
	key = append(key, disputeIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
