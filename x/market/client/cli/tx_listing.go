package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/gamma/x/market/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-listing [prod-id] [listing-id] [title] [desc] [price] [status] [quantity] [pending-orders] [completed-orders]",
		Short: "Create a new listing",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexProdId := args[0]
			indexListingId := args[1]

			// Get value arguments
			argTitle := args[2]
			argDesc := args[3]
			argPrice, err := sdk.ParseCoinNormalized(args[4])
			if err != nil {
				return err
			}
			argStatus := args[5]
			argQuantity, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argPendingOrders := strings.Split(args[7], listSeparator)
			argCompletedOrders := strings.Split(args[8], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateListing(
				clientCtx.GetFromAddress().String(),
				indexProdId,
				indexListingId,
				argTitle,
				argDesc,
				argPrice,
				argStatus,
				argQuantity,
				argPendingOrders,
				argCompletedOrders,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-listing [prod-id] [listing-id] [title] [desc] [price] [status] [quantity] [pending-orders] [completed-orders]",
		Short: "Update a listing",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexProdId := args[0]
			indexListingId := args[1]

			// Get value arguments
			argTitle := args[2]
			argDesc := args[3]
			argPrice, err := sdk.ParseCoinNormalized(args[4])
			if err != nil {
				return err
			}
			argStatus := args[5]
			argQuantity, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argPendingOrders := strings.Split(args[7], listSeparator)
			argCompletedOrders := strings.Split(args[8], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateListing(
				clientCtx.GetFromAddress().String(),
				indexProdId,
				indexListingId,
				argTitle,
				argDesc,
				argPrice,
				argStatus,
				argQuantity,
				argPendingOrders,
				argCompletedOrders,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-listing [prod-id] [listing-id]",
		Short: "Delete a listing",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexProdId := args[0]
			indexListingId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteListing(
				clientCtx.GetFromAddress().String(),
				indexProdId,
				indexListingId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
