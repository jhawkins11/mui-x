import * as React from 'react';
import { TreeViewItemId } from '../models';
import { MuiCancellableEventHandler } from '../internals/models/MuiCancellableEvent';
import { TreeViewAnyPluginSignature, TreeViewPublicAPI } from '../internals/models';

export interface UseTreeItem2Parameters {
  /**
   * The id attribute of the item. If not provided, it will be generated.
   */
  id?: string;
  /**
   * If `true`, the item is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The id of the item.
   * Must be unique.
   */
  itemId: TreeViewItemId;
  /**
   * The label of the item.
   */
  label?: React.ReactNode;
  rootRef?: React.Ref<HTMLLIElement>;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

export interface UseTreeItem2RootSlotOwnProps {
  role: 'treeitem';
  tabIndex: -1;
  id: string;
  'aria-expanded': React.AriaAttributes['aria-expanded'];
  'aria-selected': React.AriaAttributes['aria-selected'];
  'aria-disabled': React.AriaAttributes['aria-disabled'];
  onFocus: MuiCancellableEventHandler<React.FocusEvent>;
  ref: React.RefCallback<HTMLLIElement>;
}

export type UseTreeItem2RootSlotProps<ExternalProps = {}> = ExternalProps &
  UseTreeItem2RootSlotOwnProps;

export interface UseTreeItem2ContentSlotOwnProps {
  onClick: MuiCancellableEventHandler<React.MouseEvent>;
  onMouseDown: MuiCancellableEventHandler<React.MouseEvent>;
  ref: React.RefCallback<HTMLDivElement> | null;
  status: UseTreeItem2Status;
}

export type UseTreeItem2ContentSlotProps<ExternalProps = {}> = ExternalProps &
  UseTreeItem2ContentSlotOwnProps;

export interface UseTreeItem2IconContainerSlotOwnProps {}

export type UseTreeItemIconContainerSlotProps<ExternalProps = {}> = ExternalProps &
  UseTreeItem2IconContainerSlotOwnProps;

export interface UseTreeItem2LabelSlotOwnProps {
  children: React.ReactNode;
}

export type UseTreeItem2LabelSlotProps<ExternalProps = {}> = ExternalProps &
  UseTreeItem2LabelSlotOwnProps;

export interface UseTreeItem2GroupTransitionSlotOwnProps {
  unmountOnExit: boolean;
  in: boolean;
  component: 'ul';
  role: 'group';
  children: React.ReactNode;
}

export type UseTreeItem2GroupTransitionSlotProps<ExternalProps = {}> = ExternalProps &
  UseTreeItem2GroupTransitionSlotOwnProps;

export interface UseTreeItem2Status {
  expandable: boolean;
  expanded: boolean;
  focused: boolean;
  selected: boolean;
  disabled: boolean;
}

export interface UseTreeItem2ReturnValue<TPlugins extends readonly TreeViewAnyPluginSignature[]> {
  /**
   * Resolver for the root slot's props.
   * @param {ExternalProps} externalProps Additional props for the root slot
   * @returns {UseTreeItem2RootSlotProps<ExternalProps>} Props that should be spread on the root slot
   */
  getRootProps: <ExternalProps extends Record<string, any> = {}>(
    externalProps?: ExternalProps,
  ) => UseTreeItem2RootSlotProps<ExternalProps>;
  /**
   * Resolver for the content slot's props.
   * @param {ExternalProps} externalProps Additional props for the content slot
   * @returns {UseTreeItem2ContentSlotProps<ExternalProps>} Props that should be spread on the content slot
   */
  getContentProps: <ExternalProps extends Record<string, any> = {}>(
    externalProps?: ExternalProps,
  ) => UseTreeItem2ContentSlotProps<ExternalProps>;
  /**
   * Resolver for the label slot's props.
   * @param {ExternalProps} externalProps Additional props for the label slot
   * @returns {UseTreeItem2LabelSlotProps<ExternalProps>} Props that should be spread on the label slot
   */
  getLabelProps: <ExternalProps extends Record<string, any> = {}>(
    externalProps?: ExternalProps,
  ) => UseTreeItem2LabelSlotProps<ExternalProps>;
  /**
   * Resolver for the iconContainer slot's props.
   * @param {ExternalProps} externalProps Additional props for the iconContainer slot
   * @returns {UseTreeItemIconContainerSlotProps<ExternalProps>} Props that should be spread on the iconContainer slot
   */
  getIconContainerProps: <ExternalProps extends Record<string, any> = {}>(
    externalProps?: ExternalProps,
  ) => UseTreeItemIconContainerSlotProps<ExternalProps>;
  /**
   * Resolver for the GroupTransition slot's props.
   * @param {ExternalProps} externalProps Additional props for the GroupTransition slot
   * @returns {UseTreeItem2GroupTransitionSlotProps<ExternalProps>} Props that should be spread on the GroupTransition slot
   */
  getGroupTransitionProps: <ExternalProps extends Record<string, any> = {}>(
    externalProps?: ExternalProps,
  ) => UseTreeItem2GroupTransitionSlotProps<ExternalProps>;
  /**
   * A ref to the component's root DOM element.
   */
  rootRef: React.RefCallback<HTMLLIElement> | null;
  /**
   * Current status of the item.
   */
  status: UseTreeItem2Status;
  /**
   * The object the allows Tree View manipulation.
   */
  publicAPI: TreeViewPublicAPI<TPlugins>;
}
