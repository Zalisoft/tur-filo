import axios from "axios";

export const sendMailIndividual = async (data: {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message?: string;
  alisTarihi: string;
  iadeTarihi: string;
}) => {
  const response = await axios.post(
    `https://api.filizturanli.com/api/turfilo/personal`,
    data
  );
  return response.data;
};

export const sendMailInstitutional = async (data: {
  name: string;
  surname: string;
  email: string;
  phone: string;
  aracSayisi: number;
  alisTarihi: string;
  kiralamaSuresi: string;
  message?: string;
  companyName: string;
}) => {
  const response = await axios.post(
    `https://api.filizturanli.com/api/turfilo/institutional`,
    data
  );
  return response.data;
};
