// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: whitelist/buyers.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Buyers struct {
	BuyerId string `protobuf:"bytes,1,opt,name=buyerId,proto3" json:"buyerId,omitempty"`
	Buyer   *Buyer `protobuf:"bytes,2,opt,name=buyer,proto3" json:"buyer,omitempty"`
	Creator string `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Buyers) Reset()         { *m = Buyers{} }
func (m *Buyers) String() string { return proto.CompactTextString(m) }
func (*Buyers) ProtoMessage()    {}
func (*Buyers) Descriptor() ([]byte, []int) {
	return fileDescriptor_a3be5f368676dacf, []int{0}
}
func (m *Buyers) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Buyers) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Buyers.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Buyers) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Buyers.Merge(m, src)
}
func (m *Buyers) XXX_Size() int {
	return m.Size()
}
func (m *Buyers) XXX_DiscardUnknown() {
	xxx_messageInfo_Buyers.DiscardUnknown(m)
}

var xxx_messageInfo_Buyers proto.InternalMessageInfo

func (m *Buyers) GetBuyerId() string {
	if m != nil {
		return m.BuyerId
	}
	return ""
}

func (m *Buyers) GetBuyer() *Buyer {
	if m != nil {
		return m.Buyer
	}
	return nil
}

func (m *Buyers) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Buyers)(nil), "crowlabs.gamma.whitelist.Buyers")
}

func init() { proto.RegisterFile("whitelist/buyers.proto", fileDescriptor_a3be5f368676dacf) }

var fileDescriptor_a3be5f368676dacf = []byte{
	// 200 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2b, 0xcf, 0xc8, 0x2c,
	0x49, 0xcd, 0xc9, 0x2c, 0x2e, 0xd1, 0x4f, 0x2a, 0xad, 0x4c, 0x2d, 0x2a, 0xd6, 0x2b, 0x28, 0xca,
	0x2f, 0xc9, 0x17, 0x92, 0x48, 0x2e, 0xca, 0x2f, 0xcf, 0x49, 0x4c, 0x2a, 0xd6, 0x4b, 0x4f, 0xcc,
	0xcd, 0x4d, 0xd4, 0x83, 0x2b, 0x93, 0x12, 0x45, 0xd3, 0x01, 0xd1, 0xa0, 0x54, 0xcc, 0xc5, 0xe6,
	0x04, 0x36, 0x40, 0x48, 0x82, 0x8b, 0x1d, 0x2c, 0xe1, 0x99, 0x22, 0xc1, 0xa8, 0xc0, 0xa8, 0xc1,
	0x19, 0x04, 0xe3, 0x0a, 0x99, 0x72, 0xb1, 0x82, 0x99, 0x12, 0x4c, 0x0a, 0x8c, 0x1a, 0xdc, 0x46,
	0xf2, 0x7a, 0xb8, 0x2c, 0xd1, 0x03, 0x1b, 0x15, 0x04, 0x51, 0x0d, 0x32, 0x30, 0xb9, 0x28, 0x35,
	0xb1, 0x24, 0xbf, 0x48, 0x82, 0x19, 0x62, 0x20, 0x94, 0xeb, 0xe4, 0x76, 0xe2, 0x91, 0x1c, 0xe3,
	0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e, 0xc9, 0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70, 0xe1, 0xb1, 0x1c,
	0xc3, 0x8d, 0xc7, 0x72, 0x0c, 0x51, 0x3a, 0xe9, 0x99, 0x25, 0x19, 0xa5, 0x49, 0x7a, 0xc9, 0xf9,
	0xb9, 0xfa, 0x20, 0x5b, 0x74, 0x41, 0xd6, 0xe8, 0x83, 0xad, 0xd1, 0xaf, 0xd0, 0x47, 0x78, 0xa1,
	0xa4, 0xb2, 0x20, 0xb5, 0x38, 0x89, 0x0d, 0xec, 0x07, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff,
	0xf6, 0xc8, 0x79, 0xc0, 0x0e, 0x01, 0x00, 0x00,
}

func (m *Buyers) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Buyers) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Buyers) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintBuyers(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Buyer != nil {
		{
			size, err := m.Buyer.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintBuyers(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.BuyerId) > 0 {
		i -= len(m.BuyerId)
		copy(dAtA[i:], m.BuyerId)
		i = encodeVarintBuyers(dAtA, i, uint64(len(m.BuyerId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintBuyers(dAtA []byte, offset int, v uint64) int {
	offset -= sovBuyers(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Buyers) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.BuyerId)
	if l > 0 {
		n += 1 + l + sovBuyers(uint64(l))
	}
	if m.Buyer != nil {
		l = m.Buyer.Size()
		n += 1 + l + sovBuyers(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovBuyers(uint64(l))
	}
	return n
}

func sovBuyers(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozBuyers(x uint64) (n int) {
	return sovBuyers(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Buyers) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBuyers
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Buyers: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Buyers: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyers
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBuyers
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBuyers
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BuyerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Buyer", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyers
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthBuyers
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBuyers
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Buyer == nil {
				m.Buyer = &Buyer{}
			}
			if err := m.Buyer.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyers
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBuyers
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBuyers
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBuyers(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBuyers
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipBuyers(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBuyers
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBuyers
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBuyers
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthBuyers
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupBuyers
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthBuyers
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthBuyers        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBuyers          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupBuyers = fmt.Errorf("proto: unexpected end of group")
)
