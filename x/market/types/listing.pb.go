// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: market/listing.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
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

type Listing struct {
	ProdId          string     `protobuf:"bytes,1,opt,name=prodId,proto3" json:"prodId,omitempty"`
	ListingId       string     `protobuf:"bytes,2,opt,name=listingId,proto3" json:"listingId,omitempty"`
	Title           string     `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Desc            string     `protobuf:"bytes,4,opt,name=desc,proto3" json:"desc,omitempty"`
	Price           types.Coin `protobuf:"bytes,5,opt,name=price,proto3" json:"price"`
	Status          string     `protobuf:"bytes,6,opt,name=status,proto3" json:"status,omitempty"`
	Quantity        uint64     `protobuf:"varint,7,opt,name=quantity,proto3" json:"quantity,omitempty"`
	PendingOrders   []string   `protobuf:"bytes,8,rep,name=pendingOrders,proto3" json:"pendingOrders,omitempty"`
	CompletedOrders []string   `protobuf:"bytes,9,rep,name=completedOrders,proto3" json:"completedOrders,omitempty"`
	Creator         string     `protobuf:"bytes,10,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Listing) Reset()         { *m = Listing{} }
func (m *Listing) String() string { return proto.CompactTextString(m) }
func (*Listing) ProtoMessage()    {}
func (*Listing) Descriptor() ([]byte, []int) {
	return fileDescriptor_cf47b8dd0f012d79, []int{0}
}
func (m *Listing) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Listing) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Listing.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Listing) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Listing.Merge(m, src)
}
func (m *Listing) XXX_Size() int {
	return m.Size()
}
func (m *Listing) XXX_DiscardUnknown() {
	xxx_messageInfo_Listing.DiscardUnknown(m)
}

var xxx_messageInfo_Listing proto.InternalMessageInfo

func (m *Listing) GetProdId() string {
	if m != nil {
		return m.ProdId
	}
	return ""
}

func (m *Listing) GetListingId() string {
	if m != nil {
		return m.ListingId
	}
	return ""
}

func (m *Listing) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Listing) GetDesc() string {
	if m != nil {
		return m.Desc
	}
	return ""
}

func (m *Listing) GetPrice() types.Coin {
	if m != nil {
		return m.Price
	}
	return types.Coin{}
}

func (m *Listing) GetStatus() string {
	if m != nil {
		return m.Status
	}
	return ""
}

func (m *Listing) GetQuantity() uint64 {
	if m != nil {
		return m.Quantity
	}
	return 0
}

func (m *Listing) GetPendingOrders() []string {
	if m != nil {
		return m.PendingOrders
	}
	return nil
}

func (m *Listing) GetCompletedOrders() []string {
	if m != nil {
		return m.CompletedOrders
	}
	return nil
}

func (m *Listing) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Listing)(nil), "crowlabs.gamma.market.Listing")
}

func init() { proto.RegisterFile("market/listing.proto", fileDescriptor_cf47b8dd0f012d79) }

var fileDescriptor_cf47b8dd0f012d79 = []byte{
	// 355 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x91, 0xcf, 0x4a, 0xec, 0x30,
	0x1c, 0x85, 0xdb, 0x99, 0xce, 0x9f, 0xe6, 0x72, 0xb9, 0x10, 0xe6, 0x5e, 0x72, 0x07, 0xa9, 0x45,
	0x5c, 0xd4, 0x85, 0x09, 0xa3, 0xf8, 0x02, 0x33, 0xab, 0x01, 0x41, 0xe8, 0xd2, 0x5d, 0x9a, 0x86,
	0x1a, 0x6c, 0x9b, 0x9a, 0x64, 0xd4, 0x79, 0x0b, 0x9f, 0xc8, 0xf5, 0x2c, 0x67, 0xe9, 0x4a, 0x64,
	0xe6, 0x45, 0xa4, 0x49, 0x55, 0x74, 0x97, 0x73, 0x7e, 0x1f, 0xe1, 0x83, 0x03, 0x26, 0x15, 0x55,
	0xb7, 0xdc, 0x90, 0x52, 0x68, 0x23, 0xea, 0x02, 0x37, 0x4a, 0x1a, 0x09, 0xff, 0x32, 0x25, 0x1f,
	0x4a, 0x9a, 0x69, 0x5c, 0xd0, 0xaa, 0xa2, 0xd8, 0x41, 0xd3, 0x49, 0x21, 0x0b, 0x69, 0x09, 0xd2,
	0xbe, 0x1c, 0x3c, 0x8d, 0x98, 0xd4, 0x95, 0xd4, 0x24, 0xa3, 0x9a, 0x93, 0xfb, 0x59, 0xc6, 0x0d,
	0x9d, 0x11, 0x26, 0x45, 0xed, 0xee, 0x47, 0xcf, 0x3d, 0x30, 0xba, 0x74, 0xdf, 0xc3, 0x7f, 0x60,
	0xd8, 0x28, 0x99, 0x2f, 0x73, 0xe4, 0xc7, 0x7e, 0x12, 0xa6, 0x5d, 0x82, 0x07, 0x20, 0xec, 0x0c,
	0x96, 0x39, 0xea, 0xd9, 0xd3, 0x57, 0x01, 0x27, 0x60, 0x60, 0x84, 0x29, 0x39, 0xea, 0xdb, 0x8b,
	0x0b, 0x10, 0x82, 0x20, 0xe7, 0x9a, 0xa1, 0xc0, 0x96, 0xf6, 0x0d, 0x2f, 0xc0, 0xa0, 0x51, 0x82,
	0x71, 0x34, 0x88, 0xfd, 0xe4, 0xd7, 0xd9, 0x7f, 0xec, 0xdc, 0x70, 0xeb, 0x86, 0x3b, 0x37, 0xbc,
	0x90, 0xa2, 0x9e, 0x07, 0x9b, 0xd7, 0x43, 0x2f, 0x75, 0x74, 0xab, 0xa5, 0x0d, 0x35, 0x2b, 0x8d,
	0x86, 0x4e, 0xcb, 0x25, 0x38, 0x05, 0xe3, 0xbb, 0x15, 0xad, 0x8d, 0x30, 0x6b, 0x34, 0x8a, 0xfd,
	0x24, 0x48, 0x3f, 0x33, 0x3c, 0x06, 0xbf, 0x1b, 0x5e, 0xe7, 0xa2, 0x2e, 0xae, 0x54, 0xce, 0x95,
	0x46, 0xe3, 0xb8, 0x9f, 0x84, 0xe9, 0xf7, 0x12, 0x26, 0xe0, 0x0f, 0x93, 0x55, 0x53, 0x72, 0xc3,
	0xf3, 0x8e, 0x0b, 0x2d, 0xf7, 0xb3, 0x86, 0x08, 0x8c, 0x98, 0xe2, 0xd4, 0x48, 0x85, 0x80, 0x95,
	0xf8, 0x88, 0xf3, 0xc5, 0x66, 0x17, 0xf9, 0xdb, 0x5d, 0xe4, 0xbf, 0xed, 0x22, 0xff, 0x69, 0x1f,
	0x79, 0xdb, 0x7d, 0xe4, 0xbd, 0xec, 0x23, 0xef, 0xfa, 0xa4, 0x10, 0xe6, 0x66, 0x95, 0x61, 0x26,
	0x2b, 0xd2, 0x4e, 0x76, 0xda, 0x6e, 0x46, 0xec, 0x66, 0xe4, 0x91, 0x74, 0xd3, 0x9a, 0x75, 0xc3,
	0x75, 0x36, 0xb4, 0x63, 0x9c, 0xbf, 0x07, 0x00, 0x00, 0xff, 0xff, 0x2b, 0x53, 0xf0, 0x6d, 0xf1,
	0x01, 0x00, 0x00,
}

func (m *Listing) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Listing) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Listing) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintListing(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.CompletedOrders) > 0 {
		for iNdEx := len(m.CompletedOrders) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.CompletedOrders[iNdEx])
			copy(dAtA[i:], m.CompletedOrders[iNdEx])
			i = encodeVarintListing(dAtA, i, uint64(len(m.CompletedOrders[iNdEx])))
			i--
			dAtA[i] = 0x4a
		}
	}
	if len(m.PendingOrders) > 0 {
		for iNdEx := len(m.PendingOrders) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.PendingOrders[iNdEx])
			copy(dAtA[i:], m.PendingOrders[iNdEx])
			i = encodeVarintListing(dAtA, i, uint64(len(m.PendingOrders[iNdEx])))
			i--
			dAtA[i] = 0x42
		}
	}
	if m.Quantity != 0 {
		i = encodeVarintListing(dAtA, i, uint64(m.Quantity))
		i--
		dAtA[i] = 0x38
	}
	if len(m.Status) > 0 {
		i -= len(m.Status)
		copy(dAtA[i:], m.Status)
		i = encodeVarintListing(dAtA, i, uint64(len(m.Status)))
		i--
		dAtA[i] = 0x32
	}
	{
		size, err := m.Price.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintListing(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if len(m.Desc) > 0 {
		i -= len(m.Desc)
		copy(dAtA[i:], m.Desc)
		i = encodeVarintListing(dAtA, i, uint64(len(m.Desc)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Title) > 0 {
		i -= len(m.Title)
		copy(dAtA[i:], m.Title)
		i = encodeVarintListing(dAtA, i, uint64(len(m.Title)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ListingId) > 0 {
		i -= len(m.ListingId)
		copy(dAtA[i:], m.ListingId)
		i = encodeVarintListing(dAtA, i, uint64(len(m.ListingId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.ProdId) > 0 {
		i -= len(m.ProdId)
		copy(dAtA[i:], m.ProdId)
		i = encodeVarintListing(dAtA, i, uint64(len(m.ProdId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintListing(dAtA []byte, offset int, v uint64) int {
	offset -= sovListing(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Listing) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ProdId)
	if l > 0 {
		n += 1 + l + sovListing(uint64(l))
	}
	l = len(m.ListingId)
	if l > 0 {
		n += 1 + l + sovListing(uint64(l))
	}
	l = len(m.Title)
	if l > 0 {
		n += 1 + l + sovListing(uint64(l))
	}
	l = len(m.Desc)
	if l > 0 {
		n += 1 + l + sovListing(uint64(l))
	}
	l = m.Price.Size()
	n += 1 + l + sovListing(uint64(l))
	l = len(m.Status)
	if l > 0 {
		n += 1 + l + sovListing(uint64(l))
	}
	if m.Quantity != 0 {
		n += 1 + sovListing(uint64(m.Quantity))
	}
	if len(m.PendingOrders) > 0 {
		for _, s := range m.PendingOrders {
			l = len(s)
			n += 1 + l + sovListing(uint64(l))
		}
	}
	if len(m.CompletedOrders) > 0 {
		for _, s := range m.CompletedOrders {
			l = len(s)
			n += 1 + l + sovListing(uint64(l))
		}
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovListing(uint64(l))
	}
	return n
}

func sovListing(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozListing(x uint64) (n int) {
	return sovListing(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Listing) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowListing
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
			return fmt.Errorf("proto: Listing: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Listing: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ProdId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ProdId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ListingId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ListingId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Title", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Title = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Desc", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Desc = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Price", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Price.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Status = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Quantity", wireType)
			}
			m.Quantity = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Quantity |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PendingOrders", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PendingOrders = append(m.PendingOrders, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CompletedOrders", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CompletedOrders = append(m.CompletedOrders, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowListing
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
				return ErrInvalidLengthListing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthListing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipListing(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthListing
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
func skipListing(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowListing
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
					return 0, ErrIntOverflowListing
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
					return 0, ErrIntOverflowListing
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
				return 0, ErrInvalidLengthListing
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupListing
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthListing
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthListing        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowListing          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupListing = fmt.Errorf("proto: unexpected end of group")
)
