import 'react-redux';
import { ComponentType } from 'react';

declare module 'react-redux' {
  export interface InferableComponentDecorator<TOwnProps> {
    <T extends ComponentType<TOwnProps>>(component: T): T;
  }
  export interface Connect {
    <TStateProps = any, TDispatchProps = any, TOwnProps = any, TMergedProps = any, State = any>(
      mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
      mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
      mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
      options?: Options
    ): InferableComponentDecorator<TOwnProps>;
  }
}
