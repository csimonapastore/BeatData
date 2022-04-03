//	https://www.codewars.com/kata/5682e545fb263ecf7b000069/javascript

class Marine {  
  constructor(_damage, _armor) {  
    this.marineDamage = _damage;
    this.marineArmor = _armor;
  }
  
  get damage() { return this.marineDamage; }
  set damage(value) { this.marineDamage = value; }
  
  get armor() { return this.marineArmor }
  set armor(value) { this.marineArmor = value; }
 
}

class MarineWeaponUpgrade {   
  constructor(marine) {
    this.marineUpgradeDamage = (marine.damage!=null ? marine.damage : 0) + 1;
    this.marineUpgradeArmor = marine.armor!=null ? marine.armor : 0;
  }
  
  get damage() { return this.marineUpgradeDamage; }
  set damage(value) { this.marineUpgradeDamage = value; }
  
  get armor() { return this.marineUpgradeArmor; }
  set armor(value) { this.marineUpgradeArmor = value; }
  
}

class MarineArmorUpgrade {
  constructor(marine) {
    this.marineUpgradeDamage = marine.damage!=null ? marine.damage : 0;
    this.marineUpgradeArmor = (marine.armor!=null ? marine.armor : 0) + 1;
  }
  
  get damage() { return this.marineUpgradeDamage; }
  set damage(value) { this.marineUpgradeDamage = value; }
  
  get armor() { return this.marineUpgradeArmor; }
  set armor(value) { this.marineUpgradeArmor = value; }
}
