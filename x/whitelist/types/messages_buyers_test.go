package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateBuyers_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateBuyers
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateBuyers{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateBuyers{
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

func TestMsgUpdateBuyers_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateBuyers
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateBuyers{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateBuyers{
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

func TestMsgDeleteBuyers_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteBuyers
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteBuyers{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteBuyers{
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
