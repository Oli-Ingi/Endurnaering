

export class Ls {

    private static isChecked = false;
    private static isOk = false;

    private static IsLocalStorage = () => {
        if (Ls.isChecked)
            return Ls.isOk;
        else if (typeof window !== "undefined") {
            Ls.isChecked = true;

            if (localStorage){
                localStorage.setItem("tls", "1");
                
                if (localStorage.getItem("tls")) {
                    localStorage.removeItem("tls");
                    Ls.isOk = true;
    
                    return true;
                }
            }
        }
    }

    public static get = (key: string) =>
        Ls.IsLocalStorage() ? JSON.parse(localStorage.getItem(key)) : null;

    public static set = (key: string, val: unknown) =>
        Ls.IsLocalStorage() && localStorage.setItem(key, JSON.stringify(val));
}