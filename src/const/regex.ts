const regex = {
  email: /^[\w.-]+@[\w-]+.[\w.-]+$/,
  // 최소 8자. 최대 20자. 최소 하나의 숫자, 영문, 특수문자
  password: /^(?=\S*[a-z])(?=\S*[\d@$!%*?&])\S{8,20}$/,
  noSpecialChar: /^[a-zA-Z0-9ㄱ-힣&._-]/,
};

export default regex;
