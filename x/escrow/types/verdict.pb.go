// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: escrow/verdict.proto

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

type Verdict struct {
	CrowId        string   `protobuf:"bytes,1,opt,name=crowId,proto3" json:"crowId,omitempty"`
	DisputeId     string   `protobuf:"bytes,2,opt,name=disputeId,proto3" json:"disputeId,omitempty"`
	VoteIds       []string `protobuf:"bytes,3,rep,name=voteIds,proto3" json:"voteIds,omitempty"`
	ResultingVote *Vote    `protobuf:"bytes,4,opt,name=resultingVote,proto3" json:"resultingVote,omitempty"`
	Creator       string   `protobuf:"bytes,5,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Verdict) Reset()         { *m = Verdict{} }
func (m *Verdict) String() string { return proto.CompactTextString(m) }
func (*Verdict) ProtoMessage()    {}
func (*Verdict) Descriptor() ([]byte, []int) {
	return fileDescriptor_9c819df1bc1449e4, []int{0}
}
func (m *Verdict) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Verdict) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Verdict.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Verdict) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Verdict.Merge(m, src)
}
func (m *Verdict) XXX_Size() int {
	return m.Size()
}
func (m *Verdict) XXX_DiscardUnknown() {
	xxx_messageInfo_Verdict.DiscardUnknown(m)
}

var xxx_messageInfo_Verdict proto.InternalMessageInfo

func (m *Verdict) GetCrowId() string {
	if m != nil {
		return m.CrowId
	}
	return ""
}

func (m *Verdict) GetDisputeId() string {
	if m != nil {
		return m.DisputeId
	}
	return ""
}

func (m *Verdict) GetVoteIds() []string {
	if m != nil {
		return m.VoteIds
	}
	return nil
}

func (m *Verdict) GetResultingVote() *Vote {
	if m != nil {
		return m.ResultingVote
	}
	return nil
}

func (m *Verdict) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Verdict)(nil), "crowlabs.gamma.escrow.Verdict")
}

func init() { proto.RegisterFile("escrow/verdict.proto", fileDescriptor_9c819df1bc1449e4) }

var fileDescriptor_9c819df1bc1449e4 = []byte{
	// 248 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x49, 0x2d, 0x4e, 0x2e,
	0xca, 0x2f, 0xd7, 0x2f, 0x4b, 0x2d, 0x4a, 0xc9, 0x4c, 0x2e, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x12, 0x05, 0x89, 0xe5, 0x24, 0x26, 0x15, 0xeb, 0xa5, 0x27, 0xe6, 0xe6, 0x26, 0xea, 0x41,
	0x14, 0x49, 0x09, 0xc2, 0x14, 0xe7, 0x97, 0xa4, 0x42, 0x54, 0x2a, 0x6d, 0x63, 0xe4, 0x62, 0x0f,
	0x83, 0xe8, 0x15, 0x12, 0xe3, 0x62, 0x03, 0x49, 0x7b, 0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0x70,
	0x06, 0x41, 0x79, 0x42, 0x32, 0x5c, 0x9c, 0x29, 0x99, 0xc5, 0x05, 0xa5, 0x25, 0xa9, 0x9e, 0x29,
	0x12, 0x4c, 0x60, 0x29, 0x84, 0x80, 0x90, 0x04, 0x17, 0x3b, 0xc8, 0x3c, 0xcf, 0x94, 0x62, 0x09,
	0x66, 0x05, 0x66, 0x0d, 0xce, 0x20, 0x18, 0x57, 0xc8, 0x91, 0x8b, 0xb7, 0x28, 0xb5, 0xb8, 0x34,
	0xa7, 0x24, 0x33, 0x2f, 0x3d, 0x2c, 0xbf, 0x24, 0x55, 0x82, 0x45, 0x81, 0x51, 0x83, 0xdb, 0x48,
	0x5a, 0x0f, 0xab, 0xeb, 0xf4, 0x40, 0x4a, 0x82, 0x50, 0x75, 0x80, 0x0c, 0x4f, 0x2e, 0x4a, 0x4d,
	0x2c, 0xc9, 0x2f, 0x92, 0x60, 0x05, 0x5b, 0x0c, 0xe3, 0x3a, 0x39, 0x9f, 0x78, 0x24, 0xc7, 0x78,
	0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7,
	0x70, 0xe3, 0xb1, 0x1c, 0x43, 0x94, 0x66, 0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e,
	0xae, 0x3e, 0xc8, 0x60, 0x5d, 0x90, 0x55, 0xfa, 0x60, 0xab, 0xf4, 0x2b, 0xf4, 0xa1, 0x41, 0x50,
	0x52, 0x59, 0x90, 0x5a, 0x9c, 0xc4, 0x06, 0x0e, 0x04, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff,
	0xe8, 0x5c, 0xc4, 0xa6, 0x46, 0x01, 0x00, 0x00,
}

func (m *Verdict) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Verdict) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Verdict) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintVerdict(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x2a
	}
	if m.ResultingVote != nil {
		{
			size, err := m.ResultingVote.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintVerdict(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if len(m.VoteIds) > 0 {
		for iNdEx := len(m.VoteIds) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.VoteIds[iNdEx])
			copy(dAtA[i:], m.VoteIds[iNdEx])
			i = encodeVarintVerdict(dAtA, i, uint64(len(m.VoteIds[iNdEx])))
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.DisputeId) > 0 {
		i -= len(m.DisputeId)
		copy(dAtA[i:], m.DisputeId)
		i = encodeVarintVerdict(dAtA, i, uint64(len(m.DisputeId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.CrowId) > 0 {
		i -= len(m.CrowId)
		copy(dAtA[i:], m.CrowId)
		i = encodeVarintVerdict(dAtA, i, uint64(len(m.CrowId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintVerdict(dAtA []byte, offset int, v uint64) int {
	offset -= sovVerdict(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Verdict) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.CrowId)
	if l > 0 {
		n += 1 + l + sovVerdict(uint64(l))
	}
	l = len(m.DisputeId)
	if l > 0 {
		n += 1 + l + sovVerdict(uint64(l))
	}
	if len(m.VoteIds) > 0 {
		for _, s := range m.VoteIds {
			l = len(s)
			n += 1 + l + sovVerdict(uint64(l))
		}
	}
	if m.ResultingVote != nil {
		l = m.ResultingVote.Size()
		n += 1 + l + sovVerdict(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovVerdict(uint64(l))
	}
	return n
}

func sovVerdict(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozVerdict(x uint64) (n int) {
	return sovVerdict(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Verdict) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowVerdict
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
			return fmt.Errorf("proto: Verdict: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Verdict: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowVerdict
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
				return ErrInvalidLengthVerdict
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthVerdict
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
					return ErrIntOverflowVerdict
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
				return ErrInvalidLengthVerdict
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthVerdict
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DisputeId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field VoteIds", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowVerdict
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
				return ErrInvalidLengthVerdict
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthVerdict
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.VoteIds = append(m.VoteIds, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ResultingVote", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowVerdict
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
				return ErrInvalidLengthVerdict
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthVerdict
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ResultingVote == nil {
				m.ResultingVote = &Vote{}
			}
			if err := m.ResultingVote.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowVerdict
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
				return ErrInvalidLengthVerdict
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthVerdict
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipVerdict(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthVerdict
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
func skipVerdict(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowVerdict
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
					return 0, ErrIntOverflowVerdict
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
					return 0, ErrIntOverflowVerdict
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
				return 0, ErrInvalidLengthVerdict
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupVerdict
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthVerdict
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthVerdict        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowVerdict          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupVerdict = fmt.Errorf("proto: unexpected end of group")
)