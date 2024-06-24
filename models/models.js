const {parseDate} = require('../state/func');


class ConcplantValue {
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
    change_bunk_id = 0
    created_at = ''

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "SAND_NETTO":
                        this.sand_netto = p.Value;
                        break;
                    case "SAND_SET":
                        this.sand_set = p.Value;
                        break;
                    case "RUB_NETTO":
                        this.rub_netto = p.Value;
                        break;
                    case "RUB_SET":
                        this.rub_set = p.Value;
                        break;
                    case "KERAM_NETTO":
                        this.keram_netto = p.Value;
                        break;
                    case "KERAM_SET":
                        this.keram_set = p.Value;
                        break;
                    case "NULL_NETTO":
                        this.null_netto = p.Value;
                        break;
                    case "NULL_SET":
                        this.null_set = p.Value;
                        break;
                    case "CEM1_NETTO":
                        this.cem1_netto = p.Value;
                        break;
                    case "CEM1_SET":
                        this.cem1_set = p.Value;
                        break;
                    case "CEM2_NETTO":
                        this.cem2_netto = p.Value;
                        break;
                    case "CEM2_SET":
                        this.cem2_set = p.Value;
                        break;
                    case "CEM3_NETTO":
                        this.cem3_netto = p.Value;
                        break;
                    case "CEM3_SET":
                        this.cem3_set = p.Value;
                        break;
                    case "WAT1_NETTO":
                        this.wat1_netto = p.Value;
                        break;
                    case "WAT1_SET":
                        this.wat1_set = p.Value;
                        break;
                    case "WAT2_NETTO":
                        this.wat2_netto = p.Value;
                        break;
                    case "WAT2_SET":
                        this.wat2_set = p.Value;
                        break;
                    case "CHEM1_NETTO":
                        this.chem1_netto = p.Value;
                        break;
                    case "CHEM1_SET":
                        this.chem1_set = p.Value;
                        break;
                    case "CHEM2_NETTO":
                        this.chem2_netto = p.Value;
                        break;
                    case "CHEM2_SET":
                        this.chem2_set = p.Value;
                        break;
                    case "CHEM3_NETTO":
                        this.chem3_netto = p.Value;
                        break;
                    case "CHEM3_SET":
                        this.chem3_set = p.Value;
                        break;
                    case "MIX_CURRENT":
                        this.mix_current = p.Value;
                        break;
                    case "CUR_COUNT":
                        this.cur_count = p.Value;
                        break;
                    case "ALL_COUNT":
                        this.all_count = p.Value;
                        break;
                    case "ID_PROG":
                        this.id_prog = p.Value;
                        break;
                    case "CHANGE_BUNK_ID":
                        this.change_bunk_id = p.Value;
                        break;
                    case "created_at":
                        this.created_at = parseDate(p.Value);
                        break;


                }
            })
        }
        return this;
    }
}

class Programs {
    id_master = 0
    id_prog = 0
    client = ''
    car = ''
    drivename = ''
    shipper = ''
    perevoz = ''
    produc = ''
    rec_name = ''
    id_req_rec = 0
    ttn = 0
    m_list = 0
    all_count = 0
    volume = 0
    rec_vol = 0
    rec_sand = 0
    rec_rub = 0
    rec_keram = 0
    rec_null = 0
    rec_cem1 = 0
    rec_cem2 = 0
    rec_wat1 = 0
    rec_wat2 = 0
    rec_chem1 = 0
    rec_chem2 = 0
    rec_chem3 = 0
    created_at = ''

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "CLIENT":
                        this.client = p.Value;
                        break;
                    case "CAR":
                        this.car = p.Value;
                        break;
                    case "drivename":
                        this.drivename = p.Value;
                        break;
                    case "shipper":
                        this.shipper = p.Value;
                        break;
                    case "perevoz":
                        this.perevoz = p.Value;
                        break;
                    case "REC_NAME":
                        this.rec_name = p.Value;
                        break;
                    case "produc":
                        this.produc = p.Value;
                        break;
                    case "REC_SAND":
                        this.rec_sand = p.Value;
                        break;
                    case "REC_RUB":
                        this.rec_rub = p.Value;
                        break;
                    case "REC_KERAM":
                        this.rec_keram = p.Value;
                        break;
                    case "REC_NULL":
                        this.rec_null = p.Value;
                        break;
                    case "REC_CEM1":
                        this.rec_cem1 = p.Value;
                        break;
                    case "REC_CEM2":
                        this.rec_cem2 = p.Value;
                        break;
                    case "REC_WAT1":
                        this.rec_wat1 = p.Value;
                        break;
                    case "REC_WAT2":
                        this.rec_wat2 = p.Value;
                        break;
                    case "REC_CHEM1":
                        this.rec_chem1 = p.Value;
                        break;
                    case "REC_CHEM2":
                        this.rec_chem2 = p.Value;
                        break;
                    case "REC_CHEM3":
                        this.rec_chem3 = p.Value;
                        break;
                    case "REC_VOL":
                        this.rec_vol = p.Value;
                        break;
                    case "ALL_COUNT":
                        this.all_count = p.Value;
                        break;
                    case "VOLUME":
                        this.volume = p.Value;
                        break;
                    case "id_req_rec":
                        this.id_req_rec = p.Value;
                        break;
                    case "ttn":
                        this.ttn = p.Value;
                        break;
                    case "m_list":
                        this.m_list = p.Value;
                        break;
                    case "created_at":
                        this.created_at = parseDate(p.Value);
                        break;

                }
            })
        }
        return this;
    }
}


module.exports = {
    ConcplantValue,
    Programs,
}