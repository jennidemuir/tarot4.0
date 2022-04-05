import { collection, query, where} from "firebase/firestore";
import { db } from "./init-firebase";
import { useAuth } from "../context/AuthContext";

export const tarotCardCollectionRef = collection(db, 'tarot-card')

export const userCollectionRef = collection(db, 'user')