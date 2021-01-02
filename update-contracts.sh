rm -r dollar
git clone https://github.com/emptysetsquad/dollar.git
rm -r contracts
mkdir contracts
cp -r dollar/protocol/contracts/. contracts/.
rm -r abis
mkdir abis
cp -r dollar/protocol/abi/. abis/.