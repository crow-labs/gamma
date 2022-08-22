package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// VoterKeyPrefix is the prefix to retrieve all Voter
	VoterKeyPrefix = "Voter/value/"
)

// VoterKey returns the store key to retrieve a Voter from the index fields
func VoterKey(
	accAddr string,
) []byte {
	var key []byte

	accAddrBytes := []byte(accAddr)
	key = append(key, accAddrBytes...)
	key = append(key, []byte("/")...)

	return key
}
