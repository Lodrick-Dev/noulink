import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Slide } from "react-awesome-reveal";
import { Dynamic } from "../../Context/ContextDynamique";
import { toast } from "react-toastify";
import axios from "axios";

// --- Styled Components ---
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.596);
  backdrop-filter: blur(4px);
  position: fixed;
  z-index: 80;
  display: flex;
  justify-content: center;
  align-items: center;
  .sous-b {
    margin: 20px auto;
    padding: 28px;
    background: ${COLORS.white};
    border-radius: 16px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    max-height: 600px;
    min-height: 600px;
    overflow-y: scroll;
    em {
      font-size: 0.8em;
      margin-bottom: 5px;
      text-align: center;
      display: block;
    }
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${COLORS.main};
  margin-bottom: 10px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: ${COLORS.black};
  font-weight: 500;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${COLORS.grey};
  border-radius: 8px;
  font-size: 15px;
  background: #fff;
  transition: 0.2s;
  &:focus {
    border-color: ${COLORS.second};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: ${COLORS.main};
  color: ${COLORS.white};
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 10px;
  &:hover {
    opacity: 0.85;
  }
`;

// --- Component ---
export default function FormFacture({
  setPopFacture,
}: {
  setPopFacture: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [nom, setNom] = useState("");
  const [siret, setSiret] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [telephone, setTelephone] = useState("");
  //save
  const [nomS, setNomS] = useState("");
  const [siretS, setSiretS] = useState("");
  const [adresseS, setAdresseS] = useState("");
  const [codePostalS, setCodePostalS] = useState("");
  const [villeS, setVilleS] = useState("");
  const [telephoneS, setTelephoneS] = useState("");
  const { userAuth, token, isPremium } = Dynamic();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/update-facturation/${
          userAuth?.id
        }`,
        withCredentials: true,
        data: {
          namef: nom ? nom : nomS,
          siret: siret ? siret : siretS,
          adresse: adresse ? adresse : adresseS,
          codePostal: codePostal ? codePostal : codePostalS,
          villef: ville ? ville : villeS,
          telephone: telephone ? telephone : telephoneS,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        if (res.data.succes) {
          toast.success(res.data.succes);
          emptyFields();
        }
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.data?.message) {
        return toast.error(error.response?.data?.message);
      }
      return toast.error(
        "Une erreur est survenue lors de la mise jour du profil"
      );
    }
  };

  const getInfofacture = async () => {
    if (!userAuth?.id) {
      return toast.error("Utilisateur non identifié");
    }
    try {
      const res = await axios({
        method: "post",
        url: `${import.meta.env.VITE_APP_API}restaurant/infos-facturation/${
          userAuth?.id
        }`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data) {
        setNomS(res.data.namef);
        setSiretS(res.data.siret);
        setAdresseS(res.data.adresse);
        setCodePostalS(res.data.codePostal);
        setVilleS(res.data.villef);
        setTelephoneS(res.data.telephone);
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.data?.message) {
        return toast.error(error.response?.data?.message);
      }
      return toast.error(
        "Une erreur est survenue lors de la mise jour du profil"
      );
    }
  };

  const emptyFields = () => {
    setNom("");
    setSiret("");
    setAdresse("");
    setCodePostal("");
    setVille("");
    setTelephone("");
  };

  useEffect(() => {
    if (isPremium) {
      getInfofacture();
    }
  }, []);
  return (
    <Container onClick={() => setPopFacture(false)}>
      <div className="sous-b" onClick={(e) => e.stopPropagation()}>
        <Slide direction="up" triggerOnce>
          <Title>Informations de facturation (Entreprise)</Title>
          <em>Information non visible auprès du public</em>
          <em>Email : {userAuth?.email}</em>
          <form onSubmit={handleSubmit}>
            <Field>
              <Label>Nom de l'entreprise*</Label>
              <Input
                name="nom"
                placeholder="Ex: Nou Link"
                onChange={(e) => setNom(e.target.value)}
                defaultValue={nomS ? nomS : nom}
              />
            </Field>

            <Field>
              <Label>SIRET*</Label>
              <Input
                name="siret"
                onChange={(e) => setSiret(e.target.value)}
                placeholder="Ex: xxxxxxxxx0004"
                defaultValue={siretS ? siretS : siret}
              />
            </Field>

            <Field>
              <Label>Adresse*</Label>
              <Input
                name="adresse"
                placeholder="Numéro + Rue"
                onChange={(e) => setAdresse(e.target.value)}
                defaultValue={adresseS ? adresseS : adresse}
              />
            </Field>

            <div style={{ display: "flex", gap: "12px" }}>
              <Field style={{ flex: 1 }}>
                <Label>Code Postal*</Label>
                <Input
                  name="codePostal"
                  placeholder="Ex: 75001"
                  onChange={(e) => setCodePostal(e.target.value)}
                  defaultValue={codePostalS ? codePostalS : codePostal}
                />
              </Field>

              <Field style={{ flex: 2 }}>
                <Label>Ville*</Label>
                <Input
                  name="ville"
                  placeholder="Ex: Paris"
                  onChange={(e) => setVille(e.target.value)}
                  defaultValue={villeS ? villeS : ville}
                />
              </Field>
            </div>
            <Field>
              <Label>Téléphone</Label>
              <Input
                name="telephone"
                placeholder="06 00 00 00 00"
                onChange={(e) => setTelephone(e.target.value)}
                defaultValue={telephoneS ? telephoneS : telephone}
              />
            </Field>
            <Button type="submit">Enregistrer</Button>
          </form>
        </Slide>
      </div>
    </Container>
  );
}
