package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// OrderKeyPrefix is the prefix to retrieve all Order
	OrderKeyPrefix = "Order/value/"
)

// OrderKey returns the store key to retrieve a Order from the index fields
func OrderKey(
	orderId string,
	buyerId string,
) []byte {
	var key []byte

	orderIdBytes := []byte(orderId)
	key = append(key, orderIdBytes...)
	key = append(key, []byte("/")...)

	buyerIdBytes := []byte(buyerId)
	key = append(key, buyerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
