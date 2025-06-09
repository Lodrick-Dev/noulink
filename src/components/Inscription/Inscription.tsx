import { useState, type ChangeEvent } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { Fade, Slide } from "react-awesome-reveal";
import Loading from "../Loading/Loading";
const Inscription = () => {
  const [saveur, setSaveur] = useState("");
  const [etape, setEtape] = useState(0);
  const [mot, setMot] = useState("");
  const [mots, setMots] = useState<string[]>([]);
  const [profil, setProfil] = useState<File | null>(null);
  const [galerie, setGalerie] = useState<File[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [numero, setNumero] = useState("");
  const [displayNumero, setDisplayNumero] = useState<null | string>("");
  const [changeField, setChangeField] = useState(false);
  const [error, setError] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [ville, setVille] = useState("");
  const [codeSms, setCodeSms] = useState("");
  const [sendingCode, setSendingCode] = useState(false);

  //vérifie si le numero est déjà associé a un code
  const [sendedCode, setSendedCode] = useState(false);

  const backNumero = () => {
    setDisplayNumero("");
    setNumero("");
    setChangeField(false);
  };

  const handleValidation = () => {
    if (!formatAndValidatePhone(numero)) {
      setError(
        "Numéro invalide. Veuillez entrer un numéro mobile valide (France, DOM)."
      );
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setError("");
      const formatNum = formatAndValidatePhone(numero);
      setDisplayNumero(formatNum);
      setChangeField(true);
      alert("✅ Numéro valide !" + formatNum);
    }
  };
  const formatAndValidatePhone = (numero: string): string | null => {
    const clean = numero.replace(/[\s\-().]/g, "");

    if (/^0690\d{6}$/.test(clean)) return "+590" + clean.slice(1); // Guadeloupe
    if (/^0696\d{6}$/.test(clean)) return "+596" + clean.slice(1); // Martinique
    if (/^0694\d{6}$/.test(clean)) return "+594" + clean.slice(1); // Guyane
    if (/^0639\d{6}$/.test(clean)) return "+262" + clean.slice(1); // Mayotte

    if (/^0[67]\d{8}$/.test(clean)) return "+33" + clean.slice(1); // France

    if (/^\+33[67]\d{8}$/.test(clean)) return clean;
    if (/^\+590690\d{6}$/.test(clean)) return clean;
    if (/^\+596696\d{6}$/.test(clean)) return clean;
    if (/^\+594694\d{6}$/.test(clean)) return clean;
    if (/^\+262639\d{6}$/.test(clean)) return clean;

    return null; // Numéro invalide
  };

  const moreImg = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const selectedFiles = Array.from(files);
      if (selectedFiles.length > 3) {
        alert("Tu peux sélectionner jusqu'à 3 images maximum.");
        return;
      }
      setGalerie(selectedFiles);
      const urls = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  const profilImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setProfil(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSaveur(event.target.value);
    console.log("Saveur choisie :", event.target.value);
  };
  const handleEtape = () => {
    if (etape === 0) {
      if (!pseudo || !saveur || !ville) {
        return alert("Tous les champs sont nécessaires");
      }
      if (pseudo.length > 20) alert("20 caractères max pour le pseudo");
      if (!displayNumero) return alert("Vérifiez le numéro de téléphone");
      if (!codeSms) return alert("Le code reçu par sms est nécessaire");
      // return alert(
      //   `Voici le ${pseudo} et la ville : ${ville} la saveur : ${saveur} et le numéro : ${displayNumero}`
      // );
      setEtape(1);
    } else {
      setEtape(0);
    }
  };
  const handleMots = () => {
    if (!mot.trim()) return alert("Ajouter un mot");
    if (mots.length >= 5) return alert("5 mots max");
    if (mots.includes(mot.trim())) return alert("Ce mot existe déjà");
    setMots((prev) => [...prev, mot.trim()]);
    setMot("");
  };
  const handleRemoveMot = (motASupprimer: string) => {
    setMots((prev) => prev.filter((m) => m !== motASupprimer));
  };
  const handleSendCode = async () => {
    setSendingCode(true);
    const timeSendin = setTimeout(() => {
      setSendingCode(false);
      setSendedCode(true);
    }, 2000);
    return () => clearTimeout(timeSendin);
  };
  return (
    <StyledInscription>
      <h2>Inscription*</h2>
      <p>Pour rester actif vérifiez votre numéro directement</p>
      {etape === 0 && (
        <Slide direction="down">
          <div className="first">
            <input
              type="text"
              placeholder="Nom pseudo ou établissement*"
              value={pseudo ? pseudo : ""}
              onChange={(e) => setPseudo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ville*"
              value={ville ? ville : ""}
              onChange={(e) => setVille(e.target.value)}
            />
            <div className="box-saveur">
              <label htmlFor="saveur">Saveurs de* : </label>
              <select id="saveur" value={saveur} onChange={handleChange}>
                <option value="">--Selection de la saveur--</option>
                <option value="Guyane">Guyane</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Martinique">Martinique</option>
                <option value="Mayotte">Mayotte</option>
              </select>
            </div>
            <div className="numero">
              <label htmlFor="num">Entrez le numéro de téléphone** :</label>
              {changeField ? (
                <div className="send-code">
                  <p>
                    Pour rester actif. Un code est envoyé au {displayNumero}
                  </p>
                  {sendingCode && <Loading />}
                  {sendedCode && (
                    <input
                      type="text"
                      placeholder="Code reçu"
                      value={codeSms ? codeSms : ""}
                      onChange={(e) => setCodeSms(e.target.value)}
                    />
                  )}
                  {!sendingCode && !sendedCode && (
                    <>
                      <button onClick={() => handleSendCode()}>
                        Envoyer le code
                      </button>
                      <span onClick={() => backNumero()}>Retour</span>
                    </>
                  )}
                </div>
              ) : (
                <input
                  type="tel"
                  placeholder="Avec indicatif téléphonique"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
              )}
              {!changeField && (
                <button onClick={handleValidation}>Vérifier</button>
              )}
              <span>
                Numéro accepté : France(+33), Guyane(+594), Guadeloupe(+590),
                Martinique(+596), Mayotte(+262). Numéro non public
              </span>
              {error && (
                <p style={{ color: "red", fontSize: "0.7em" }}>{error}</p>
              )}
            </div>
          </div>
        </Slide>
      )}
      <div className="box-etape">
        <button onClick={() => handleEtape()}>
          {etape === 0 ? "Suivant" : "Retour"}
        </button>
      </div>
      {etape === 1 && (
        <Fade>
          <div className="second">
            <div className="second-second">
              <div className="profil">
                <label htmlFor="profil">Profil</label>
                <input type="file" id="profil" onChange={(e) => profilImg(e)} />
              </div>
              <div className="plat-img">
                <label htmlFor="img-food">
                  Galerie (sélectionner 3 image max ) :
                </label>
                <input
                  type="file"
                  id="img-food"
                  multiple
                  onChange={(e) => moreImg(e)}
                />
              </div>
              <textarea placeholder="Description, contact, horaire, ect (optionnel)"></textarea>
              <div className="key-search">
                <label htmlFor="key">
                  5 mots max(spécialités) pour que les visiteurs vous trouvent :{" "}
                </label>
                <input
                  type="text"
                  id="key"
                  value={mot ? mot : ""}
                  placeholder="Mot"
                  onChange={(e) => setMot(e.target.value)}
                />
                <button onClick={() => handleMots()}>➕</button>
                {mots && mots.length > 0 && (
                  <div className="key-w">
                    {mots.map((mot, i) => (
                      <span key={i} onClick={() => handleRemoveMot(mot)}>
                        {mot} ❌
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <button className="btn-sub">Inscription</button>
            </div>
            <div className="preview">
              <span>Présualisation des images 1:1</span>
              {imageUrl && (
                <div className="profil">
                  <span>Profil : </span>
                  <img src={imageUrl ? imageUrl : ""} />
                </div>
              )}
              {previewUrls && previewUrls.length > 0 && (
                <div className="galerie">
                  <span>Galerie : </span>
                  {previewUrls.map((url, i) => (
                    <img key={i} src={url} alt="img-galerie" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Fade>
      )}
      <span className="info-cgu">
        *Votre inscription vaut l'acceptation des cgu
      </span>
      <span className="info-cgu">
        **Suppression de votre compte après 5 Mois si pas actif. Le CODE vous
        permettra de rester actif
      </span>
    </StyledInscription>
  );
};

export default Inscription;

const StyledInscription = styled.div`
  background: ${COLORS.second};
  width: 50%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  /* flex-direction: column; */
  padding: 20px;
  border-radius: 15px;
  h2 {
    font-size: 2em;
    color: white;
    width: 100%;
    text-align: center;
  }
  p {
    width: 100%;
    text-align: center;
    color: ${COLORS.main};
  }
  .info-cgu {
    width: 100%;
    color: ${COLORS.yellow};
    margin-top: 10px;
    font-size: 0.7em;
  }
  .box-etape {
    width: 100%;
    display: flex;
    button {
      background: ${COLORS.yellow};
      box-shadow: 1px 1px 7px ${COLORS.black};
      border: none;
      border-radius: 5px;
      outline: none;
      height: 3em;
      font-size: 0.8em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
      padding: 10px 40px;
      cursor: pointer;
      transition: 0.1s;
    }
    button:hover {
      transition: 0.1s;
      transform: scale(1.05);
    }
  }
  .first {
    width: 60%;
    display: flex;
    margin: 20px 0px;
    flex-direction: column;
    input {
      margin-top: 10px;
      padding: 5px;
      font-size: 1.1em;
      border: none;
      outline: none;
      border-radius: 5px;
    }
    .box-saveur,
    .numero {
      width: 100%;
      margin-top: 10px;
      background: ${COLORS.main};
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      padding: 10px 10px 10px 10px;
      button {
        margin-top: 5px;
        width: 50%;
        outline: none;
        border: none;
        background: ${COLORS.green};
        border-radius: 5px;
        cursor: pointer;
      }
      select {
        padding: 5px;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      input {
        margin-top: 0px;
        font-size: 1em;
      }
      label {
        font-size: 0.8em;
        color: white;
      }
      span {
        font-size: 0.7em;
        color: ${COLORS.yellow};
      }
      .send-code {
        margin: 10px 0px;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.8em;
          text-decoration: underline;
          color: white;
        }
        span {
          cursor: pointer;
          margin-top: 15px;
        }
      }
    }
  }
  .second {
    width: 100%;
    /* background: orange; */
    display: flex;
    align-items: center;
    .second-second {
      width: 60%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin: 20px 0px;
      flex-wrap: wrap;
      .profil {
        background: ${COLORS.main};
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        label {
          font-size: 0.8em;
          color: white;
        }
      }
      .plat-img {
        margin-top: 20px;
        background: ${COLORS.main};
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        label {
          font-size: 0.8em;
          color: white;
        }
      }
      textarea {
        margin-top: 20px;
        border-radius: 5px;
        outline: none;
        border: none;
        resize: none;
        height: 10svh;
        padding: 5px;
      }
      .key-search {
        margin-top: 10px;
        /* background: blue; */
        background: ${COLORS.main};
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        label {
          font-size: 0.8em;
          color: white;
        }
        input {
          width: 50%;
          border-radius: 5px;
          outline: none;
          border: none;
          padding: 5px;
          margin-right: 5px;
        }
        button {
          outline: none;
          cursor: pointer;
          border: none;
          margin-top: 10px;
          width: 15%;
          display: flex;
          justify-content: center;
          border-radius: 5px;
          padding: 5px 15px;
          background: ${COLORS.yellow};
        }
        .key-w {
          display: flex;
          span {
            cursor: pointer;
            color: ${COLORS.yellow};
            margin: 10px;
          }
        }
      }
      .btn-sub {
        margin-top: 10px;
        width: 45%;
        padding: 5px 15px;
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 1.2em;
        background: ${COLORS.green};
        cursor: pointer;
        transition: 0.2s;
      }
      .btn-sub:hover {
        transition: 0.2s;
        transform: scale(1.05);
      }
    }
    .preview {
      width: 30%;
      display: flex;
      flex-direction: column;
      span {
        width: 100%;
        font-size: 0.9em;
        text-align: center;
      }
      .profil {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 20px 0px;
        img {
          width: 60%;
        }
      }
      .galerie {
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        span {
          width: 100%;
        }
        img {
          width: 50%;
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    width: 90%;
    .first {
      width: 100%;
    }
    .second {
      flex-direction: column;
      .second-second {
        width: 100%;
        padding: 3px;
        margin: 20px 0px;
        flex-wrap: wrap;
      }
      .preview {
        width: 100%;
        .profil {
          width: 100%;
          img {
            width: 50%;
          }
        }
        .galerie {
          max-width: 100%;
          display: flex;
          flex-wrap: wrap;
          span {
            width: 100%;
          }
          img {
            width: 50%;
          }
        }
      }
    }
  }
`;
