import CustomError, { ErrorType } from '../CustomError';

export default class IncomprehensibleMessage extends CustomError {
  static type = 'IncomprehensibleMessage' as ErrorType;
}
