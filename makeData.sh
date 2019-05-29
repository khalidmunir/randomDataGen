#!/bin/bash

FileName="5.csv"
FileName2="6.csv"
 
#NAS
./runner.sh > NAS/PII/$FileName
./runner.sh > NAS/PCI/$FileName
./runner.sh > NAS/SPEC/$FileName
./runner.sh > NAS/RET/$FileName
./runner.sh > NAS/UNC/$FileName
./runner.sh > NAS/SEC/$FileName
./runner.sh > NAS/CLS/$FileName
./runner.sh > NAS/INT/$FileName
./runner.sh > NAS/PUB/$FileName

# SP
./runner.sh > SP/PII/$FileName
./runner.sh > SP/PCI/$FileName
./runner.sh > SP/SPEC/$FileName
./runner.sh > SP/RET/$FileName
./runner.sh > SP/UNC/$FileName
./runner.sh > SP/SEC/$FileName
./runner.sh > SP/CLS/$FileName
./runner.sh > SP/INT/$FileName
./runner.sh > SP/PUB/$FileName


#NAS
./runner.sh > NAS/PII/$FileName2
./runner.sh > NAS/PCI/$FileName2
./runner.sh > NAS/SPEC/$FileName2
./runner.sh > NAS/RET/$FileName2
./runner.sh > NAS/UNC/$FileName2
./runner.sh > NAS/SEC/$FileName2
./runner.sh > NAS/CLS/$FileName2
./runner.sh > NAS/INT/$FileName2
./runner.sh > NAS/PUB/$FileName2

# SP
./runner.sh > SP/PII/$FileName2
./runner.sh > SP/PCI/$FileName2
./runner.sh > SP/SPEC/$FileName2
./runner.sh > SP/RET/$FileName2
./runner.sh > SP/UNC/$FileName2
./runner.sh > SP/SEC/$FileName2
./runner.sh > SP/CLS/$FileName2
./runner.sh > SP/INT/$FileName2
./runner.sh > SP/PUB/$FileName2



