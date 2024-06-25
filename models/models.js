const {parseDate} = require('../state/func');
const mysqlMulin = require("../db/dbMulin");
const {DataTypes} = require("sequelize");


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

class ProgramsValue {
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
                    case "ID_PROG":
                        this.id_prog = p.Value;
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

class ChangeMaterialValue {
    id_master = 0
    bunk1_mat_id = 0
    bunk2_mat_id = 0
    bunk3_mat_id = 0
    bunk4_mat_id = 0
    cem1_mat_id = 0
    cem2_mat_id = 0
    cem3_mat_id = 0
    chem1_mat_id = 0
    chem2_mat_id = 0
    chem3_mat_id = 0
    created_at = ''

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "bunk1_mat_id":
                        this.bunk1_mat_id = p.Value;
                        break;
                    case "bunk2_mat_id":
                        this.bunk2_mat_id = p.Value;
                        break;
                    case "bunk3_mat_id":
                        this.bunk3_mat_id = p.Value;
                        break;
                    case "bunk4_mat_id":
                        this.bunk4_mat_id = p.Value;
                        break;
                    case "cem1_mat_id":
                        this.cem1_mat_id = p.Value;
                        break;
                    case "cem2_mat_id":
                        this.cem2_mat_id = p.Value;
                        break;
                    case "cem3_mat_id":
                        this.cem3_mat_id = p.Value;
                        break;
                    case "chem1_mat_id":
                        this.chem1_mat_id = p.Value;
                        break;
                    case "chem2_mat_id":
                        this.chem2_mat_id = p.Value;
                        break;
                    case "chem3_mat_id":
                        this.chem3_mat_id = p.Value;
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

class LevelMaterialValue {
    id_master = 0
    sand = 0
    rub = 0
    keram = 0
    _null = 0
    cem1 = 0
    cem2 = 0
    cem3 = 0
    chem1 = 0
    chem2 = 0
    chem3 = 0
    created_at = ''

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "sand":
                        this.sand = p.Value;
                        break;
                    case "rub":
                        this.rub = p.Value;
                        break;
                    case "keram":
                        this.keram = p.Value;
                        break;
                    case "_null":
                        this._null = p.Value;
                        break;
                    case "cem1":
                        this.cem1 = p.Value;
                        break;
                    case "cem2":
                        this.cem2 = p.Value;
                        break;
                    case "cem3":
                        this.cem3 = p.Value;
                        break;
                    case "chem1":
                        this.chem1 = p.Value;
                        break;
                    case "chem2":
                        this.chem2 = p.Value;
                        break;
                    case "chem3":
                        this.chem3 = p.Value;
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

class LogsExceptionValue {
    id_master = 0
    name_function = ''
    exception = ''
    comment = ''
    created_at = ''

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "name_function":
                        this.name_function = p.Value;
                        break;
                    case "exception":
                        this.exception = p.Value;
                        break;
                    case "comment":
                        this.comment = p.Value;
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

class LogsMaterialValue {
    id_master = 0
    material = 0
    value = 0
    set_add = 0
    level_silo_old = 0
    level_silo_new = 0
    zero_value = 0
    comment = ''
    created_at = ''

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "material":
                        this.material = p.Value;
                        break;
                    case "value":
                        this.value = p.Value;
                        break;
                    case "set_add":
                        this.set_add = p.Value;
                        break;
                    case "level_silo_old":
                        this.level_silo_old = p.Value;
                        break;
                    case "level_silo_new":
                        this.level_silo_new = p.Value;
                        break;
                    case "comment":
                        this.comment = p.Value;
                        break;
                    case "zero_value":
                        this.zero_value = p.Value;
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

class MaterialsValue {
    id_master = 0
    name = ''
    comment = ''
    visible = 0
    not_inert = 0
    created_at = ''

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "name":
                        this.name = p.Value;
                        break;
                    case "comment":
                        this.comment = p.Value;
                        break;
                    case "visible":
                        this.visible = p.Value;
                        break;
                    case "not_inert":
                        this.not_inert = p.Value;
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

class StoreLevelValue {
    id_master = 0
    id_material = 0
    value = 0
    old_value = 0
    sub_value = 0
    created_at = ''

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "id_material":
                        this.id_material = p.Value;
                        break;
                    case "value":
                        this.value = p.Value;
                        break;
                    case "old_value":
                        this.old_value = p.Value;
                        break;
                    case "sub_value":
                        this.sub_value = p.Value;
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

class RequestReceptValue {
    id_master = 0
    client = ''
    car = ''
    drivename = ''
    shipper = ''
    perevoz = ''
    produc = ''
    rec_name = ''
    bunk1_mat_id = 0
    bunk2_mat_id = 0
    bunk3_mat_id = 0
    bunk4_mat_id = 0
    volume = 0
    volume_false = 0
    sand = 0
    rub = 0
    keram = 0
    _null = 0
    cem1 = 0
    cem2 = 0
    wat1 = 0
    chem1 = 0
    chem2 = 0
    chem3 = 0
    status = 0
    on_print = 0
    created_at = ''
    processed_at = ''
    finish_at = ''
    created_by = 0
    processed_by = 0
    finish_by = 0

    setParam(param) {
        if (param) {
            param.forEach(p => {
                switch (p.Field) {
                    case "id_master":
                        this.id_master = p.Value;
                        break;
                    case "volume":
                        this.volume = p.Value;
                        break;
                    case "volume_false":
                        this.volume_false = p.Value;
                        break;
                    case "client":
                        this.client = p.Value;
                        break;
                    case "car":
                        this.car = p.Value;
                        break;
                    case "perevoz":
                        this.perevoz = p.Value;
                        break;
                    case "drivename":
                        this.drivename = p.Value;
                        break;
                    case "shipper":
                        this.shipper = p.Value;
                        break;
                    case "produc":
                        this.produc = p.Value;
                        break;
                    case "rec_name":
                        this.rec_name = p.Value;
                        break;
                    case "status":
                        this.status = p.Value;
                        break;
                    case "on_print":
                        this.on_print = p.Value;
                        break;
                    case "sand":
                        this.sand = p.Value;
                        break;
                    case "rub":
                        this.rub = p.Value;
                        break;
                    case "keram":
                        this.keram = p.Value;
                        break;
                    case "_null":
                        this._null = p.Value;
                        break;
                    case "bunk1_mat_id":
                        this.bunk1_mat_id = p.Value;
                        break;
                    case "bunk2_mat_id":
                        this.bunk2_mat_id = p.Value;
                        break;
                    case "bunk3_mat_id":
                        this.bunk3_mat_id = p.Value;
                        break;
                    case "bunk4_mat_id":
                        this.bunk4_mat_id = p.Value;
                        break;
                    case "cem1":
                        this.cem1 = p.Value;
                        break;
                    case "cem2":
                        this.cem2 = p.Value;
                        break;
                    case "wat1":
                        this.wat1 = p.Value;
                        break;
                    case "chem1":
                        this.chem1 = p.Value;
                        break;
                    case "chem2":
                        this.chem2 = p.Value;
                        break;
                    case "chem3":
                        this.chem3 = p.Value;
                        break;
                    case "created_by":
                        this.created_by = p.Value;
                        break;
                    case "finish_by":
                        this.finish_by = p.Value;
                        break;
                    case "processed_by":
                        this.processed_by = p.Value;
                        break;
                    case "created_at":
                        this.created_at = parseDate(p.Value);
                        break;
                    case "processed_at":
                        this.processed_at = parseDate(p.Value);
                        break;
                    case "finish_at":
                        this.finish_at = parseDate(p.Value);
                        break;
                }
            })
        }
        return this;
    }

}


module.exports = {
    ConcplantValue,
    ProgramsValue,
    ChangeMaterialValue,
    LevelMaterialValue,
    LogsExceptionValue,
    LogsMaterialValue,
    MaterialsValue,
    StoreLevelValue,
    RequestReceptValue,
}