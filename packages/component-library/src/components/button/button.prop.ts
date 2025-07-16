export interface buttonProps {
  /**
   * The variant of the button
   **/
  variant: 'primary' | 'secondary' | 'critical';
  /**
   * Children prop
   **/
  children: React.ReactNode;
  /**
   * Click handler
   **/
  onClick?: () => void;
  /**
   * Controls if the button is disabled
   **/
  disabled?: boolean;
}
