package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateBuyerIds_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateBuyerIds
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateBuyerIds{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateBuyerIds{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateBuyerIds_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateBuyerIds
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateBuyerIds{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateBuyerIds{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteBuyerIds_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteBuyerIds
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteBuyerIds{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteBuyerIds{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
