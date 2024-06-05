const {DataTypes} = require("sequelize");

class ConcplantValue{
    id_master = 0
    sand_netto = 0
    sand_set = 0
    rub_netto = 0
    rub_set = 0
    keram_netto = 0
    keram_set = 0
    null_netto = 0
    null_set = 0
    cem1_netto = 0
    cem1_set = 0
    cem2_netto = 0
    cem2_set = 0
    cem3_netto = 0
    cem3_set = 0
    wat1_netto = 0
    wat1_set = 0
    wat2_netto = 0
    wat2_set = 0
    chem1_netto = 0
    chem1_set = 0
    chem2_netto = 0
    chem2_set = 0
    chem3_netto = 0
    chem3_set = 0
    mix_current = 0
    cur_count = 0
    all_count = 0
    id_prog = 0
    change_bunk = 0

    setParam(param){
        if(param){
            param.forEach(p => {
                switch (p.Field){
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "sand_netto":
                        this.sand_netto = p.Value;
                        break;
                    case "sand_set":
                        this.sand_set = p.Value;
                        break;
                    case "rub_netto":
                        this.rub_netto = p.Value;
                        break;
                    case "rub_set":
                        this.rub_set = p.Value;
                        break;
                    case "keram_netto":
                        this.keram_netto = p.Value;
                        break;
                    case "keram_set":
                        this.keram_set = p.Value;
                        break;
                    case "null_netto":
                        this.null_netto = p.Value;
                        break;
                    case "null_set":
                        this.null_set = p.Value;
                        break;
                    case "cem1_netto":
                        this.cem1_netto = p.Value;
                        break;
                    case "cem1_set":
                        this.cem1_set = p.Value;
                        break;
                    case "cem2_netto":
                        this.cem2_netto = p.Value;
                        break;
                    case "cem2_set":
                        this.cem2_set = p.Value;
                        break;
                    case "cem3_netto":
                        this.cem3_netto = p.Value;
                        break;
                    case "cem3_set":
                        this.cem3_set = p.Value;
                        break;
                    case "wat1_netto":
                        this.wat1_netto = p.Value;
                        break;
                    case "wat1_set":
                        this.wat1_set = p.Value;
                        break;
                    case "wat2_netto":
                        this.wat2_netto = p.Value;
                        break;
                    case "wat2_set":
                        this.wat2_set = p.Value;
                        break;
                    case "chem1_netto":
                        this.chem1_netto = p.Value;
                        break;
                    case "chem1_set":
                        this.chem1_set = p.Value;
                        break;
                    case "chem2_netto":
                        this.chem2_netto = p.Value;
                        break;
                    case "chem2_set":
                        this.chem2_set = p.Value;
                        break;
                    case "chem3_netto":
                        this.chem3_netto = p.Value;
                        break;
                    case "chem3_set":
                        this.chem3_set = p.Value;
                        break;
                    case "mix_current":
                        this.mix_current = p.Value;
                        break;
                    case "cur_count":
                        this.cur_count = p.Value;
                        break;
                    case "all_count":
                        this.all_count = p.Value;
                        break;
                    case "id_prog":
                        this.id_prog = p.Value;
                        break;
                    case "change_bunk":
                        this.change_bunk = p.Value;
                        break;


                }
            })
        }
        return this;
    }
}

module.exports = {
    ConcplantValue
}