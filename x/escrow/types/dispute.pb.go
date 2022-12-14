// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: escrow/dispute.proto

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

type Dispute struct {
	CrowId      string `protobuf:"bytes,1,opt,name=crowId,proto3" json:"crowId,omitempty"`
	DisputeId   string `protobuf:"bytes,2,opt,name=disputeId,proto3" json:"disputeId,omitempty"`
	Title       string `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Description string `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	Evidence    string `protobuf:"bytes,5,opt,name=evidence,proto3" json:"evidence,omitempty"`
	Creator     string `protobuf:"bytes,6,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Dispute) Reset()         { *m = Dispute{} }
func (m *Dispute) String() string { return proto.CompactTextString(m) }
func (*Dispute) ProtoMessage()    {}
func (*Dispute) Descriptor() ([]byte, []int) {
	return fileDescriptor_e494efae027aa112, []int{0}
}
func (m *Dispute) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Dispute) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Dispute.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Dispute) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Dispute.Merge(m, src)
}
func (m *Dispute) XXX_Size() int {
	return m.Size()
}
func (m *Dispute) XXX_DiscardUnknown() {
	xxx_messageInfo_Dispute.DiscardUnknown(m)
}

var xxx_messageInfo_Dispute proto.InternalMessageInfo

func (m *Dispute) GetCrowId() string {
	if m != nil {
		return m.CrowId
	}
	return ""
}

func (m *Dispute) GetDisputeId() string {
	if m != nil {
		return m.DisputeId
	}
	return ""
}

func (m *Dispute) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Dispute) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Dispute) GetEvidence() string {
	if m != nil {
		return m.Evidence
	}
	return ""
}

func (m *Dispute) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Dispute)(nil), "crowlabs.gamma.escrow.Dispute")
}

func init() { proto.RegisterFile("escrow/dispute.proto", fileDescriptor_e494efae027aa112) }

var fileDescriptor_e494efae027aa112 = []byte{
	// 234 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x49, 0x2d, 0x4e, 0x2e,
	0xca, 0x2f, 0xd7, 0x4f, 0xc9, 0x2c, 0x2e, 0x28, 0x2d, 0x49, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x12, 0x05, 0x89, 0xe5, 0x24, 0x26, 0x15, 0xeb, 0xa5, 0x27, 0xe6, 0xe6, 0x26, 0xea, 0x41,
	0x14, 0x29, 0xad, 0x65, 0xe4, 0x62, 0x77, 0x81, 0x28, 0x14, 0x12, 0xe3, 0x62, 0x03, 0x89, 0x79,
	0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0x70, 0x06, 0x41, 0x79, 0x42, 0x32, 0x5c, 0x9c, 0x50, 0xb3,
	0x3c, 0x53, 0x24, 0x98, 0xc0, 0x52, 0x08, 0x01, 0x21, 0x11, 0x2e, 0xd6, 0x92, 0xcc, 0x92, 0x9c,
	0x54, 0x09, 0x66, 0xb0, 0x0c, 0x84, 0x23, 0xa4, 0xc0, 0xc5, 0x9d, 0x02, 0xb2, 0x22, 0xb3, 0xa0,
	0x24, 0x33, 0x3f, 0x4f, 0x82, 0x05, 0x2c, 0x87, 0x2c, 0x24, 0x24, 0xc5, 0xc5, 0x91, 0x5a, 0x96,
	0x99, 0x92, 0x9a, 0x97, 0x9c, 0x2a, 0xc1, 0x0a, 0x96, 0x86, 0xf3, 0x85, 0x24, 0xb8, 0xd8, 0x93,
	0x8b, 0x52, 0x13, 0x4b, 0xf2, 0x8b, 0x24, 0xd8, 0xc0, 0x52, 0x30, 0xae, 0x93, 0xf3, 0x89, 0x47,
	0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85,
	0xc7, 0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0x69, 0xa6, 0x67, 0x96, 0x64, 0x94, 0x26, 0xe9,
	0x25, 0xe7, 0xe7, 0xea, 0x83, 0x1c, 0xae, 0x0b, 0xf2, 0xac, 0x3e, 0xd8, 0xb3, 0xfa, 0x15, 0xfa,
	0xd0, 0x30, 0x29, 0xa9, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0x07, 0x89, 0x31, 0x20, 0x00, 0x00,
	0xff, 0xff, 0x71, 0x9a, 0xab, 0xf7, 0x2a, 0x01, 0x00, 0x00,
}

func (m *Dispute) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Dispute) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Dispute) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintDispute(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Evidence) > 0 {
		i -= len(m.Evidence)
		copy(dAtA[i:], m.Evidence)
		i = encodeVarintDispute(dAtA, i, uint64(len(m.Evidence)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Description) > 0 {
		i -= len(m.Description)
		copy(dAtA[i:], m.Description)
		i = encodeVarintDispute(dAtA, i, uint64(len(m.Description)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Title) > 0 {
		i -= len(m.Title)
		copy(dAtA[i:], m.Title)
		i = encodeVarintDispute(dAtA, i, uint64(len(m.Title)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.DisputeId) > 0 {
		i -= len(m.DisputeId)
		copy(dAtA[i:], m.DisputeId)
		i = encodeVarintDispute(dAtA, i, uint64(len(m.DisputeId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.CrowId) > 0 {
		i -= len(m.CrowId)
		copy(dAtA[i:], m.CrowId)
		i = encodeVarintDispute(dAtA, i, uint64(len(m.CrowId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintDispute(dAtA []byte, offset int, v uint64) int {
	offset -= sovDispute(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Dispute) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.CrowId)
	if l > 0 {
		n += 1 + l + sovDispute(uint64(l))
	}
	l = len(m.DisputeId)
	if l > 0 {
		n += 1 + l + sovDispute(uint64(l))
	}
	l = len(m.Title)
	if l > 0 {
		n += 1 + l + sovDispute(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovDispute(uint64(l))
	}
	l = len(m.Evidence)
	if l > 0 {
		n += 1 + l + sovDispute(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovDispute(uint64(l))
	}
	return n
}

func sovDispute(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDispute(x uint64) (n int) {
	return sovDispute(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Dispute) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDispute
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
			return fmt.Errorf("proto: Dispute: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Dispute: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDispute
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
				return ErrInvalidLengthDispute
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDispute
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CrowId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DisputeId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDispute
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
				return ErrInvalidLengthDispute
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDispute
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DisputeId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Title", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDispute
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
				return ErrInvalidLengthDispute
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDispute
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Title = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDispute
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
				return ErrInvalidLengthDispute
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDispute
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Evidence", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDispute
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
				return ErrInvalidLengthDispute
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDispute
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Evidence = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDispute
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
				return ErrInvalidLengthDispute
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDispute
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDispute(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDispute
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
func skipDispute(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDispute
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
					return 0, ErrIntOverflowDispute
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
					return 0, ErrIntOverflowDispute
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
				return 0, ErrInvalidLengthDispute
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDispute
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDispute
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDispute        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDispute          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDispute = fmt.Errorf("proto: unexpected end of group")
)
