const regex = {
  email: /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
  // 최소 8자. 최대 20자. 최소 하나의 소문자, 대문자, 특수문자, 숫자
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
} as const;

export default regex;
