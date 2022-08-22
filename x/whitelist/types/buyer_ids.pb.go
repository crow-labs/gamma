// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: whitelist/buyer_ids.proto

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

type BuyerIds struct {
	AccAddr string `protobuf:"bytes,1,opt,name=accAddr,proto3" json:"accAddr,omitempty"`
	BuyerId string `protobuf:"bytes,2,opt,name=buyerId,proto3" json:"buyerId,omitempty"`
	Creator string `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *BuyerIds) Reset()         { *m = BuyerIds{} }
func (m *BuyerIds) String() string { return proto.CompactTextString(m) }
func (*BuyerIds) ProtoMessage()    {}
func (*BuyerIds) Descriptor() ([]byte, []int) {
	return fileDescriptor_899c6621fa97f34b, []int{0}
}
func (m *BuyerIds) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *BuyerIds) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_BuyerIds.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *BuyerIds) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BuyerIds.Merge(m, src)
}
func (m *BuyerIds) XXX_Size() int {
	return m.Size()
}
func (m *BuyerIds) XXX_DiscardUnknown() {
	xxx_messageInfo_BuyerIds.DiscardUnknown(m)
}

var xxx_messageInfo_BuyerIds proto.InternalMessageInfo

func (m *BuyerIds) GetAccAddr() string {
	if m != nil {
		return m.AccAddr
	}
	return ""
}

func (m *BuyerIds) GetBuyerId() string {
	if m != nil {
		return m.BuyerId
	}
	return ""
}

func (m *BuyerIds) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*BuyerIds)(nil), "crowlabs.gamma.whitelist.BuyerIds")
}

func init() { proto.RegisterFile("whitelist/buyer_ids.proto", fileDescriptor_899c6621fa97f34b) }

var fileDescriptor_899c6621fa97f34b = []byte{
	// 190 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2c, 0xcf, 0xc8, 0x2c,
	0x49, 0xcd, 0xc9, 0x2c, 0x2e, 0xd1, 0x4f, 0x2a, 0xad, 0x4c, 0x2d, 0x8a, 0xcf, 0x4c, 0x29, 0xd6,
	0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x48, 0x2e, 0xca, 0x2f, 0xcf, 0x49, 0x4c, 0x2a, 0xd6,
	0x4b, 0x4f, 0xcc, 0xcd, 0x4d, 0xd4, 0x83, 0xab, 0x54, 0x8a, 0xe0, 0xe2, 0x70, 0x02, 0x29, 0xf6,
	0x4c, 0x29, 0x16, 0x92, 0xe0, 0x62, 0x4f, 0x4c, 0x4e, 0x76, 0x4c, 0x49, 0x29, 0x92, 0x60, 0x54,
	0x60, 0xd4, 0xe0, 0x0c, 0x82, 0x71, 0x41, 0x32, 0x49, 0x10, 0x55, 0x12, 0x4c, 0x10, 0x19, 0x28,
	0x17, 0x24, 0x93, 0x5c, 0x94, 0x9a, 0x58, 0x92, 0x5f, 0x24, 0xc1, 0x0c, 0x91, 0x81, 0x72, 0x9d,
	0xdc, 0x4e, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f,
	0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x4a, 0x27, 0x3d, 0xb3, 0x24,
	0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0xe4, 0x30, 0x5d, 0x90, 0xcb, 0xf4, 0xc1, 0x2e,
	0xd3, 0xaf, 0xd0, 0x47, 0xf8, 0xa2, 0xa4, 0xb2, 0x20, 0xb5, 0x38, 0x89, 0x0d, 0xec, 0x05, 0x63,
	0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0x2c, 0xe8, 0x2a, 0x97, 0xdf, 0x00, 0x00, 0x00,
}

func (m *BuyerIds) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *BuyerIds) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *BuyerIds) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintBuyerIds(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.BuyerId) > 0 {
		i -= len(m.BuyerId)
		copy(dAtA[i:], m.BuyerId)
		i = encodeVarintBuyerIds(dAtA, i, uint64(len(m.BuyerId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.AccAddr) > 0 {
		i -= len(m.AccAddr)
		copy(dAtA[i:], m.AccAddr)
		i = encodeVarintBuyerIds(dAtA, i, uint64(len(m.AccAddr)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintBuyerIds(dAtA []byte, offset int, v uint64) int {
	offset -= sovBuyerIds(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *BuyerIds) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.AccAddr)
	if l > 0 {
		n += 1 + l + sovBuyerIds(uint64(l))
	}
	l = len(m.BuyerId)
	if l > 0 {
		n += 1 + l + sovBuyerIds(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovBuyerIds(uint64(l))
	}
	return n
}

func sovBuyerIds(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozBuyerIds(x uint64) (n int) {
	return sovBuyerIds(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *BuyerIds) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBuyerIds
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
			return fmt.Errorf("proto: BuyerIds: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: BuyerIds: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AccAddr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyerIds
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
				return ErrInvalidLengthBuyerIds
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBuyerIds
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AccAddr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyerIds
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
				return ErrInvalidLengthBuyerIds
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBuyerIds
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BuyerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBuyerIds
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
				return ErrInvalidLengthBuyerIds
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBuyerIds
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBuyerIds(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBuyerIds
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
func skipBuyerIds(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBuyerIds
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
					return 0, ErrIntOverflowBuyerIds
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
					return 0, ErrIntOverflowBuyerIds
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
				return 0, ErrInvalidLengthBuyerIds
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupBuyerIds
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthBuyerIds
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthBuyerIds        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBuyerIds          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupBuyerIds = fmt.Errorf("proto: unexpected end of group")
)
