package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-crow [listing-id] [order-id] [buyer-id] [seller-id] [buyer-collateral] [seller-collateral] [buyer-funds] [status] [timeout] [dispute-id]",
		Short: "Create a new crow",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexListingId := args[0]
			indexOrderId := args[1]

			// Get value arguments
			argBuyerId := args[2]
			argSellerId := args[3]
			argBuyerCollateral, err := sdk.ParseCoinsNormalized(args[4])
			if err != nil {
				return err
			}
			argSellerCollateral, err := sdk.ParseCoinsNormalized(args[5])
			if err != nil {
				return err
			}
			argBuyerFunds, err := sdk.ParseCoinsNormalized(args[6])
			if err != nil {
				return err
			}
			argStatus := args[7]
			argTimeout := strings.Split(args[8], listSeparator)
			argDisputeId := args[9]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCrow(
				clientCtx.GetFromAddress().String(),
				indexListingId,
				indexOrderId,
				argBuyerId,
				argSellerId,
				argBuyerCollateral,
				argSellerCollateral,
				argBuyerFunds,
				argStatus,
				argTimeout,
				argDisputeId,
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

func CmdUpdateCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-crow [listing-id] [order-id] [buyer-id] [seller-id] [buyer-collateral] [seller-collateral] [buyer-funds] [status] [timeout] [dispute-id]",
		Short: "Update a crow",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexListingId := args[0]
			indexOrderId := args[1]

			// Get value arguments
			argBuyerId := args[2]
			argSellerId := args[3]
			argBuyerCollateral, err := sdk.ParseCoinsNormalized(args[4])
			if err != nil {
				return err
			}
			argSellerCollateral, err := sdk.ParseCoinsNormalized(args[5])
			if err != nil {
				return err
			}
			argBuyerFunds, err := sdk.ParseCoinsNormalized(args[6])
			if err != nil {
				return err
			}
			argStatus := args[7]
			argTimeout := strings.Split(args[8], listSeparator)
			argDisputeId := args[9]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCrow(
				clientCtx.GetFromAddress().String(),
				indexListingId,
				indexOrderId,
				argBuyerId,
				argSellerId,
				argBuyerCollateral,
				argSellerCollateral,
				argBuyerFunds,
				argStatus,
				argTimeout,
				argDisputeId,
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

func CmdDeleteCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-crow [listing-id] [order-id]",
		Short: "Delete a crow",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexListingId := args[0]
			indexOrderId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCrow(
				clientCtx.GetFromAddress().String(),
				indexListingId,
				indexOrderId,
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
