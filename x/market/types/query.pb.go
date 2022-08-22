// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: market/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

// QueryParamsRequest is request type for the Query/Params RPC method.
type QueryParamsRequest struct {
}

func (m *QueryParamsRequest) Reset()         { *m = QueryParamsRequest{} }
func (m *QueryParamsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryParamsRequest) ProtoMessage()    {}
func (*QueryParamsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc4839d34748ebb1, []int{0}
}
func (m *QueryParamsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsRequest.Merge(m, src)
}
func (m *QueryParamsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsRequest proto.InternalMessageInfo

// QueryParamsResponse is response type for the Query/Params RPC method.
type QueryParamsResponse struct {
	// params holds all the parameters of this module.
	Params Params `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
}

func (m *QueryParamsResponse) Reset()         { *m = QueryParamsResponse{} }
func (m *QueryParamsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryParamsResponse) ProtoMessage()    {}
func (*QueryParamsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc4839d34748ebb1, []int{1}
}
func (m *QueryParamsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsResponse.Merge(m, src)
}
func (m *QueryParamsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsResponse proto.InternalMessageInfo

func (m *QueryParamsResponse) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

type QueryGetOrderRequest struct {
	OrderId string `protobuf:"bytes,1,opt,name=orderId,proto3" json:"orderId,omitempty"`
	BuyerId string `protobuf:"bytes,2,opt,name=buyerId,proto3" json:"buyerId,omitempty"`
}

func (m *QueryGetOrderRequest) Reset()         { *m = QueryGetOrderRequest{} }
func (m *QueryGetOrderRequest) String() string { return proto.CompactTextString(m) }
func (*QueryGetOrderRequest) ProtoMessage()    {}
func (*QueryGetOrderRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc4839d34748ebb1, []int{2}
}
func (m *QueryGetOrderRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetOrderRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetOrderRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetOrderRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetOrderRequest.Merge(m, src)
}
func (m *QueryGetOrderRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetOrderRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetOrderRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetOrderRequest proto.InternalMessageInfo

func (m *QueryGetOrderRequest) GetOrderId() string {
	if m != nil {
		return m.OrderId
	}
	return ""
}

func (m *QueryGetOrderRequest) GetBuyerId() string {
	if m != nil {
		return m.BuyerId
	}
	return ""
}

type QueryGetOrderResponse struct {
	Order Order `protobuf:"bytes,1,opt,name=order,proto3" json:"order"`
}

func (m *QueryGetOrderResponse) Reset()         { *m = QueryGetOrderResponse{} }
func (m *QueryGetOrderResponse) String() string { return proto.CompactTextString(m) }
func (*QueryGetOrderResponse) ProtoMessage()    {}
func (*QueryGetOrderResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc4839d34748ebb1, []int{3}
}
func (m *QueryGetOrderResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetOrderResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetOrderResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetOrderResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetOrderResponse.Merge(m, src)
}
func (m *QueryGetOrderResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetOrderResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetOrderResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetOrderResponse proto.InternalMessageInfo

func (m *QueryGetOrderResponse) GetOrder() Order {
	if m != nil {
		return m.Order
	}
	return Order{}
}

type QueryAllOrderRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllOrderRequest) Reset()         { *m = QueryAllOrderRequest{} }
func (m *QueryAllOrderRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAllOrderRequest) ProtoMessage()    {}
func (*QueryAllOrderRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc4839d34748ebb1, []int{4}
}
func (m *QueryAllOrderRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllOrderRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllOrderRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllOrderRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllOrderRequest.Merge(m, src)
}
func (m *QueryAllOrderRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllOrderRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllOrderRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllOrderRequest proto.InternalMessageInfo

func (m *QueryAllOrderRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryAllOrderResponse struct {
	Order      []Order             `protobuf:"bytes,1,rep,name=order,proto3" json:"order"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllOrderResponse) Reset()         { *m = QueryAllOrderResponse{} }
func (m *QueryAllOrderResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAllOrderResponse) ProtoMessage()    {}
func (*QueryAllOrderResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc4839d34748ebb1, []int{5}
}
func (m *QueryAllOrderResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllOrderResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllOrderResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllOrderResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllOrderResponse.Merge(m, src)
}
func (m *QueryAllOrderResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllOrderResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllOrderResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllOrderResponse proto.InternalMessageInfo

func (m *QueryAllOrderResponse) GetOrder() []Order {
	if m != nil {
		return m.Order
	}
	return nil
}

func (m *QueryAllOrderResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryParamsRequest)(nil), "crowlabs.gamma.market.QueryParamsRequest")
	proto.RegisterType((*QueryParamsResponse)(nil), "crowlabs.gamma.market.QueryParamsResponse")
	proto.RegisterType((*QueryGetOrderRequest)(nil), "crowlabs.gamma.market.QueryGetOrderRequest")
	proto.RegisterType((*QueryGetOrderResponse)(nil), "crowlabs.gamma.market.QueryGetOrderResponse")
	proto.RegisterType((*QueryAllOrderRequest)(nil), "crowlabs.gamma.market.QueryAllOrderRequest")
	proto.RegisterType((*QueryAllOrderResponse)(nil), "crowlabs.gamma.market.QueryAllOrderResponse")
}

func init() { proto.RegisterFile("market/query.proto", fileDescriptor_dc4839d34748ebb1) }

var fileDescriptor_dc4839d34748ebb1 = []byte{
	// 511 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0xb1, 0x6f, 0x13, 0x31,
	0x14, 0xc6, 0xe3, 0x94, 0x04, 0x30, 0x9b, 0x9b, 0x4a, 0x55, 0xd4, 0x5e, 0xab, 0x93, 0x28, 0xb4,
	0x80, 0xad, 0xb4, 0x0b, 0x88, 0xa9, 0x45, 0xa2, 0x82, 0x85, 0xf6, 0x46, 0x06, 0x24, 0x5f, 0x6a,
	0x99, 0x88, 0xbb, 0xf3, 0xf5, 0xec, 0x00, 0x51, 0xd5, 0x85, 0x85, 0x85, 0x01, 0x89, 0x0d, 0x89,
	0xff, 0x85, 0xb1, 0x63, 0x25, 0x16, 0x26, 0x84, 0x12, 0xfe, 0x10, 0x74, 0xcf, 0x2f, 0x6a, 0x93,
	0x90, 0x90, 0x6e, 0x39, 0xbf, 0xef, 0xfb, 0xde, 0xcf, 0x7e, 0x4f, 0xa1, 0x2c, 0x95, 0xc5, 0x1b,
	0xe5, 0xc4, 0x71, 0x57, 0x15, 0x3d, 0x9e, 0x17, 0xc6, 0x19, 0xb6, 0xd4, 0x2e, 0xcc, 0xbb, 0x44,
	0xc6, 0x96, 0x6b, 0x99, 0xa6, 0x92, 0x7b, 0x49, 0xb3, 0xa1, 0x8d, 0x36, 0xa0, 0x10, 0xe5, 0x2f,
	0x2f, 0x6e, 0xae, 0x68, 0x63, 0x74, 0xa2, 0x84, 0xcc, 0x3b, 0x42, 0x66, 0x99, 0x71, 0xd2, 0x75,
	0x4c, 0x66, 0xb1, 0xba, 0xd5, 0x36, 0x36, 0x35, 0x56, 0xc4, 0xd2, 0x2a, 0xdf, 0x43, 0xbc, 0x6d,
	0xc5, 0xca, 0xc9, 0x96, 0xc8, 0xa5, 0xee, 0x64, 0x20, 0x46, 0xed, 0x22, 0xa2, 0xe4, 0xb2, 0x90,
	0xe9, 0x30, 0x60, 0xc8, 0x67, 0x8a, 0x23, 0x55, 0xf8, 0xb3, 0xb0, 0x41, 0xd9, 0x61, 0x19, 0x75,
	0x00, 0xc2, 0x48, 0x1d, 0x77, 0x95, 0x75, 0x61, 0x44, 0x17, 0x47, 0x4e, 0x6d, 0x6e, 0x32, 0xab,
	0xd8, 0x63, 0x5a, 0xf7, 0x81, 0xcb, 0x64, 0x9d, 0xdc, 0xbd, 0xb5, 0xbd, 0xca, 0xff, 0x79, 0x3b,
	0xee, 0x6d, 0x7b, 0xd7, 0xce, 0x7e, 0xad, 0x55, 0x22, 0xb4, 0x84, 0xcf, 0x69, 0x03, 0x32, 0xf7,
	0x95, 0x7b, 0x51, 0x02, 0x60, 0x2f, 0xb6, 0x4c, 0xaf, 0x03, 0xd0, 0xb3, 0x23, 0x48, 0xbd, 0x19,
	0x0d, 0x3f, 0xcb, 0x4a, 0xdc, 0xed, 0x41, 0xa5, 0xea, 0x2b, 0xf8, 0x19, 0x1e, 0xd2, 0xa5, 0xb1,
	0x2c, 0x24, 0x7c, 0x48, 0x6b, 0xe0, 0x46, 0xc0, 0x95, 0x29, 0x80, 0x60, 0x42, 0x3e, 0x6f, 0x08,
	0x5f, 0x21, 0xde, 0x6e, 0x92, 0x8c, 0xe0, 0x3d, 0xa5, 0xf4, 0xe2, 0x75, 0x31, 0x76, 0x83, 0xfb,
	0x51, 0xf0, 0x72, 0x14, 0xdc, 0x8f, 0x1b, 0x47, 0xc1, 0x0f, 0xa4, 0x56, 0xe8, 0x8d, 0x2e, 0x39,
	0xc3, 0xaf, 0x04, 0x99, 0x2f, 0x1a, 0x4c, 0x32, 0x2f, 0x5c, 0x89, 0x99, 0xed, 0x8f, 0xb0, 0x55,
	0x81, 0xed, 0xce, 0x7f, 0xd9, 0x7c, 0xdb, 0xcb, 0x70, 0xdb, 0xdf, 0x17, 0x68, 0x0d, 0xe0, 0xd8,
	0x47, 0x42, 0xeb, 0x7e, 0x7c, 0x6c, 0x73, 0x0a, 0xc8, 0xe4, 0xbe, 0x34, 0xb7, 0xe6, 0x91, 0xfa,
	0xbe, 0xe1, 0xc6, 0x87, 0x1f, 0x7f, 0xbe, 0x54, 0xd7, 0x59, 0x20, 0x4a, 0xcf, 0x83, 0xd2, 0x24,
	0xc0, 0x24, 0x46, 0x76, 0x96, 0x7d, 0x23, 0xb4, 0x06, 0x77, 0x66, 0xf7, 0x66, 0xa5, 0x8f, 0xad,
	0x53, 0xf3, 0xfe, 0x7c, 0x62, 0x84, 0x79, 0x04, 0x30, 0x3b, 0xac, 0x35, 0x0d, 0x06, 0x1e, 0x5a,
	0x9c, 0xe0, 0x4a, 0x9e, 0x8a, 0x13, 0x5c, 0xc1, 0x53, 0xf6, 0x89, 0xd0, 0x1b, 0x10, 0xb6, 0x9b,
	0x24, 0xb3, 0x11, 0xc7, 0x56, 0x6a, 0x36, 0xe2, 0xf8, 0x7a, 0x84, 0xb7, 0x01, 0x71, 0x8d, 0xad,
	0xce, 0x44, 0xdc, 0x7b, 0x72, 0xd6, 0x0f, 0xc8, 0x79, 0x3f, 0x20, 0xbf, 0xfb, 0x01, 0xf9, 0x3c,
	0x08, 0x2a, 0xe7, 0x83, 0xa0, 0xf2, 0x73, 0x10, 0x54, 0x5e, 0x6e, 0xea, 0x8e, 0x7b, 0xdd, 0x8d,
	0x79, 0xdb, 0xa4, 0x13, 0x11, 0xef, 0x87, 0x21, 0xae, 0x97, 0x2b, 0x1b, 0xd7, 0xe1, 0x4f, 0x61,
	0xe7, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x12, 0x9b, 0xac, 0x49, 0xca, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Parameters queries the parameters of the module.
	Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error)
	// Queries a Order by index.
	Order(ctx context.Context, in *QueryGetOrderRequest, opts ...grpc.CallOption) (*QueryGetOrderResponse, error)
	// Queries a list of Order items.
	OrderAll(ctx context.Context, in *QueryAllOrderRequest, opts ...grpc.CallOption) (*QueryAllOrderResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error) {
	out := new(QueryParamsResponse)
	err := c.cc.Invoke(ctx, "/crowlabs.gamma.market.Query/Params", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Order(ctx context.Context, in *QueryGetOrderRequest, opts ...grpc.CallOption) (*QueryGetOrderResponse, error) {
	out := new(QueryGetOrderResponse)
	err := c.cc.Invoke(ctx, "/crowlabs.gamma.market.Query/Order", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) OrderAll(ctx context.Context, in *QueryAllOrderRequest, opts ...grpc.CallOption) (*QueryAllOrderResponse, error) {
	out := new(QueryAllOrderResponse)
	err := c.cc.Invoke(ctx, "/crowlabs.gamma.market.Query/OrderAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Parameters queries the parameters of the module.
	Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error)
	// Queries a Order by index.
	Order(context.Context, *QueryGetOrderRequest) (*QueryGetOrderResponse, error)
	// Queries a list of Order items.
	OrderAll(context.Context, *QueryAllOrderRequest) (*QueryAllOrderResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Params(ctx context.Context, req *QueryParamsRequest) (*QueryParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Params not implemented")
}
func (*UnimplementedQueryServer) Order(ctx context.Context, req *QueryGetOrderRequest) (*QueryGetOrderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Order not implemented")
}
func (*UnimplementedQueryServer) OrderAll(ctx context.Context, req *QueryAllOrderRequest) (*QueryAllOrderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method OrderAll not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Params_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryParamsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Params(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/crowlabs.gamma.market.Query/Params",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Params(ctx, req.(*QueryParamsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Order_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetOrderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Order(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/crowlabs.gamma.market.Query/Order",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Order(ctx, req.(*QueryGetOrderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_OrderAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllOrderRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).OrderAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/crowlabs.gamma.market.Query/OrderAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).OrderAll(ctx, req.(*QueryAllOrderRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "crowlabs.gamma.market.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Params",
			Handler:    _Query_Params_Handler,
		},
		{
			MethodName: "Order",
			Handler:    _Query_Order_Handler,
		},
		{
			MethodName: "OrderAll",
			Handler:    _Query_OrderAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "market/query.proto",
}

func (m *QueryParamsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *QueryParamsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *QueryGetOrderRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetOrderRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetOrderRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BuyerId) > 0 {
		i -= len(m.BuyerId)
		copy(dAtA[i:], m.BuyerId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.BuyerId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.OrderId) > 0 {
		i -= len(m.OrderId)
		copy(dAtA[i:], m.OrderId)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.OrderId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryGetOrderResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetOrderResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetOrderResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Order.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *QueryAllOrderRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllOrderRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllOrderRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllOrderResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllOrderResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllOrderResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Order) > 0 {
		for iNdEx := len(m.Order) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Order[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryParamsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *QueryParamsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func (m *QueryGetOrderRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.OrderId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	l = len(m.BuyerId)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryGetOrderResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Order.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func (m *QueryAllOrderRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllOrderResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Order) > 0 {
		for _, e := range m.Order {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryParamsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryParamsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryParamsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryParamsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryGetOrderRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryGetOrderRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetOrderRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OrderId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OrderId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BuyerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryGetOrderResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryGetOrderResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetOrderResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Order", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Order.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAllOrderRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAllOrderRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllOrderRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAllOrderResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAllOrderResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllOrderResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Order", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Order = append(m.Order, Order{})
			if err := m.Order[len(m.Order)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
